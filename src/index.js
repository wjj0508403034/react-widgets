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
  <Controls.Button name="button1" type="primary" disabled={false} content="Primary" init={(button) => {
    viewModel.button1 = button;
    button.on("click", function () {
      button.content = 1234;
      viewModel.button2.content = "2345";
      viewModel.button2.disabled = true;
      viewModel.button2.visibility = false;
    });
  }}
  />,
  <Controls.Button name="button2" content="default" size="small" init={button => {
    viewModel.button2 = button;
    button.on("click", function () {
      console.log(arguments)
    });
  }} />,

  <Controls.Button name="button3" content="dashed" type="dashed" size="large" init={button => {
    viewModel.button3 = button;
    button.on("click", function () {
      console.log(arguments)
    });
  }} />,

  <Controls.Button name="button4" content="danger" type="danger" init={button => {
    viewModel.button4 = button;
    button.on("click", function () {
      console.log(arguments)
    });
  }} />
];

ReactDOM.render(view, document.getElementById('root'));

registerServiceWorker();
