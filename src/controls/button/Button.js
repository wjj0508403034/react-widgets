import React from 'react';
import PropTypes from 'prop-types';
import Control, { ControlProps } from "./../Control";
import { ClassUtils } from "./../utils/index"
import "./style/Button.css"


const ButtonTypes = ["primary", "ghost", "dashed", "danger"];
const ButtonSizes = ['large', 'default', 'small'];

class ButtonProps extends ControlProps {
  constructor() {
    super();
    this.add("type", PropTypes.string)
      .add("size", PropTypes.oneOf(ButtonSizes), "default")
      .defaultValue("className", "hy-btn");
  }
}

export { ButtonProps };

const PROPS = new ButtonProps();

class Button extends Control {

  static propTypes = PROPS.types;
  static defaultProps = PROPS.defaultValues;

  constructor(props) {
    super(props);
  }

  get type() {
    return this.props.type;
  }

  get buttonSize() {
    return this.props.size;
  }

  get buttonClass() {
    let btnSizeCls = buttonSizeClass.call(this);
    return ClassUtils.combine("hy-btn-", "hy-btn", {
      [`${this.type}`]: this.type,
      [`${btnSizeCls}`]: btnSizeCls,
    });
  }

  html() {
    return (
      <button control-name={this.controlName} disabled={this.disabled}
        className={this.buttonClass}
        onClick={(e) => { this.onClick(e) }}>
        {this.content}
      </button>
    );
  }
}

/**
 *  large => lg
  * small => sm
 */
function buttonSizeClass() {
  if (this.buttonSize === "large") {
    return "lg";
  }

  if (this.buttonSize === "small") {
    return "sm";
  }
}

export default Button;