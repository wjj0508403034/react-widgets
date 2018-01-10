import React from 'react';
import PropTypes from 'prop-types';
import Control, { ControlProps } from "./../Control";
import { ClassUtils } from "./../utils/index"
import "./style/Button.css"


const ButtonTypes = ["primary", "ghost", "dashed", "danger"];

class Props extends ControlProps {
  constructor() {
    super();
    this.definition.type = PropTypes.string;

    this.value.className = "hy-btn";
  }
}

export let ButtonProps = Props;

const DEFAULT_PROPS = new ButtonProps();

class Button extends Control {

  static propTypes = DEFAULT_PROPS.definition;
  static defaultProps = DEFAULT_PROPS.value;

  constructor(props) {
    super(props);
  }

  get type() {
    return this.props.type;
  }

  get controlClass() {
    return ClassUtils.combine("hy-btn-", "hy-btn", {
      [`${this.type}`]: this.type
    });
  }

  render() {
    return (
      <button control-name={this.controlName} disabled={this.disabled}
        className={this.controlClass}
        onClick={(e) => { this.onClick(e) }}>
        {this.content}
      </button>
    );
  }
}

export default Button;