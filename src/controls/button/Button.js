import React, { Component } from 'react';
import Control from "./../Control";

class Button extends Control {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div control-name={this.controlName} className="btn" disabled={this.disabled.toString()} onClick={(e) => { this.onClick(e) }}>{this.props.value}</div>
    );
  }
}

export default Button;