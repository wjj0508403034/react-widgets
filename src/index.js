import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Button from "./controls/button/Button";
var btn1 = <Button value={1} readonly="true"/>;
var btn2 = <Button value={1} readonly="true"/>;
var buttons = [btn1,btn2];
ReactDOM.render(buttons, document.getElementById('root'));
registerServiceWorker();