import React from 'react';

class Control extends React.Component {

  constructor(props) {
    super(props);
    this.init();
  }

  init(){
    this.state = {
      disabled: true
    };
  }

  get controlName() {
    return this.constructor.name;
  }

  get disabled() {
    return this.state.disabled;
  }

  onClick(event){
    console.log(event);
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Control;