import React, { Component } from 'react';
import Control from "./../Control";

class Selector extends Control {

  constructor(props) {
    super(props);
  }

  init() {
    Control.prototype.init.call(this, arguments);
    this.state.items = this.props.items;
  }

  itemControls() {
    var items = [];
    var that = this;
    this.state.items.forEach(function (item, index) {
      items.push(that.itemTemplate(index, item));
    });
    return items;
  }

  itemTemplate(itemIndex, itemData) {
    return <li key={itemIndex} index={itemIndex} >{itemData}</li>;
  }

  render() {
    return (
      <ul control-name={this.controlName}>
        {this.itemControls()}
      </ul>
    );
  }
}

export default Selector;