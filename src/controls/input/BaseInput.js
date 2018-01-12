import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Control, { ControlProps } from "./../Control";

class BaseInputProps extends ControlProps {
  constructor() {
    super();
    this.add("type", PropTypes.string, "text")
      .add("readonly", PropTypes.bool, false)
      .add("value", PropTypes.string);
  }
}

export { BaseInputProps };

const PROPS = new BaseInputProps();

class BaseInput extends Control {
  static propTypes = PROPS.types;
  static defaultProps = PROPS.defaultValues;

  init() {
    Control.prototype.init.call(this, arguments);
    this.initValue("readonly")
      .initValue("value");
  }

  get readonly() {
    return this.state.readonly;
  }

  set readonly(value) {
    this.setState({ readonly: value });
  }

  get value() {
    return this.state.value;
  }

  set value(value) {
    let oldValue = this.value;
    this.state.value = value;
    this.raiseEvent("valueChanged", value, oldValue);
  }

  get type() {
    return this.props.type;
  }

  onChange(event) {
    if (!this.disabled && !this.readonly) {
      this.value = event.target.value;
    }
  }

  html() {
    return (
      <input id={this.id} name={this.name} type={this.type} control={this.controlName} className="input" disabled={this.disabled} readOnly={this.readonly} onChange={e => this.onChange(e)} />
    );
  }
}

export default BaseInput;