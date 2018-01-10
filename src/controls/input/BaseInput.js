import React, { Component } from 'react';
import Control from "./../Control";
import PropTypes from 'prop-types';

class BaseInput extends Control {
  constructor(props) {
    super(props);
  }

  init(){
    Control.prototype.init.call(this, arguments);
    this.initStateProp("readonly",this.props.readonly);
  }

  get readonly() {
    return this.state.readonly;
  }

  get type(){
    return this.props.type;
  }

  render() {
    return (
      <input type={this.type} control-name={this.controlName} className="input" disabled={this.disabled.toString()} readonly={this.readonly.toString()}/>
    );
  }
}

BaseInput.propTypes={
  readonly: PropTypes.bool
};

BaseInput.defaultProps = {
  readonly: false
};

export default BaseInput;