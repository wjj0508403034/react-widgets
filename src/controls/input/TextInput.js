import React, { Component } from 'react';
import BaseInput from "./BaseInput";

class TextInput extends BaseInput {

  constructor(props) {
    super(props);
  }

  get type(){
    return "text";
  }
}

export default TextInput;