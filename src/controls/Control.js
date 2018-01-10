import React from 'react';
import PropTypes from 'prop-types';

class Props {
  constructor() {
    this.definition = {
      className: PropTypes.string,
      disabled: PropTypes.bool,
      content: PropTypes.any
    };

    this.value = {
      disabled: false,
      content: null,
      className: null
    };
  }
}

export let ControlProps = Props;

const DEFAULT_PROPS = new ControlProps();

class Control extends React.Component {

  static propTypes = DEFAULT_PROPS.definition;
  static defaultProps = DEFAULT_PROPS.value;

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
  }

  initStateProp(propName, propValue) {
    this.state[propName] = propValue;
  }

  getPropValueOrDefault(propName, defaultValue) {
    if (this.props.hasOwnProperty(propName)) {

    }
  }

  get controlName() {
    return this.constructor.name;
  }

  get controlClass() {
    return this.props.className;
  }

  get disabled() {
    return this.props.disabled === true;
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
    this.raiseEvent("click", event);
  }

  render() {
    return (
      <div control-name={this.controlName} className={this.controlClass}>{this.content}</div>
    );
  }
}


export default Control;