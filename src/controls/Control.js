import React from 'react';
import PropTypes from 'prop-types';
import Cores from "./core/index";
import Utils from "./utils/index";

class ControlProps extends Cores.Props {
  constructor() {
    super();

    this.add("name", PropTypes.string)
      .add("className", PropTypes.string)
      .add("disabled", PropTypes.bool, false)
      .add("visibility", PropTypes.bool, true)
      .add("content", PropTypes.any);
  }
}

export { ControlProps };

const PROPS = new ControlProps();

class Control extends React.Component {

  static propTypes = PROPS.types;
  static defaultProps = PROPS.defaultValues;

  constructor(props) {
    super(props);
    this.__eventMaps = {};
    if (typeof props.init === "function") {
      props.init.apply(this, [this]);
    }

    this.init();
  }

  init() {
    this.state = {};
    this.state.disabled = this.props.disabled;
    this.state.content = this.props.content;
    this.state.visibility = this.props.visibility;
  }

  get id() {
    if (!this.__id) {
      this.__id = idGenerator.call(this);
    }

    return this.__id
  }

  get name(){
    if(!this.props.name){
      return this.id;
    }

    return this.props.name;
  }

  get controlName() {
    return this.constructor.name;
  }

  get controlClass() {
    return this.props.className;
  }

  get disabled() {
    return this.state.disabled === true;
  }

  set disabled(value) {
    this.setState({ disabled: value });
  }

  get visibility() {
    return this.state.visibility !== false;
  }

  set visibility(value) {
    this.setState({ visibility: value });
  }

  get content() {
    return this.state.content;
  }

  set content(value) {
    this.setState({ "content": value });
  }

  on(eventName, listener) {
    if (typeof listener !== "function") {
      throw new Error(`Bind event ${eventName} failed, because event listener isn't function.`);
    }
    if (!this.__eventMaps[eventName]) {
      this.__eventMaps[eventName] = [];
    }

    this.__eventMaps[eventName].push(listener);
    return this;
  }

  off(eventName, listener) {
    if (typeof listener !== "function") {
      throw new Error(`Unbind event ${eventName} failed, because event listener isn't function.`);
    }

    let listeners = this.__eventMaps[eventName];
    if (Array.isArray(listeners)) {
      for (var index = 0; index < listeners.length; index++) {
        var item = listeners[index];
        if (item === listener) {
          listeners.splice(index, 1);
          index--;
        }
      }
    }
    return this;
  }

  off(eventName) {
    delete this.__eventMaps[eventName];
    return this;
  }

  raiseEvent(eventName, ...eventArgs) {
    let listeners = this.__eventMaps[eventName];
    if (Array.isArray(listeners)) {
      var that = this;
      listeners.forEach(function (listener) {
        listener.apply(that, [...eventArgs, that]);
      });
    }
  }

  onClick(event) {
    if (!this.disabled) {
      this.raiseEvent("click", event);
    }
  }

  render() {
    if (this.visibility) {
      return this.html();
    }

    return null;
  }

  html() {
    return (
      <div id={this.id} name={this.name} control={this.controlName} className={this.controlClass}>{this.content}</div>
    );
  }
}

function idGenerator() {
  let now = new Date();

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let random = getRandomInt(0, 1000000);

  return `${this.controlName.toLowerCase()}_${now.getTime()}_${random}`;
}

export default Control;