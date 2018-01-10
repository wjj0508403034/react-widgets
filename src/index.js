import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Controls from "./controls/index";

var viewModel = {
  button1: null,
  button2: null
};

var view = [
  <Controls.Button type="primary" disabled={false} content="Primary" init={(button) => {
    viewModel.button1 = button;
    button.on("click", function () {
      button.content = 1234;
      viewModel.button2.content = "2345";
    });
  }}
  />,
  <Controls.Button content="default" init={button => viewModel.button2 = button} />
];

ReactDOM.render(view, document.getElementById('root'));

registerServiceWorker();
