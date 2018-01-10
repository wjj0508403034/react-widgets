import React, { Component } from 'react';
import Control from "./../Control";

class ItemControl extends Control {

  constructor(props) {
    super(props);
  }

  init() {
    Control.prototype.init.call(this, arguments);
    this.state.data = this.props.data;
  }

  render() {
    return (
      <li control-name={this.controlName} item-index={this.props.index} >{this.state.data}</li>
    );
  }
}

export default ItemControl;