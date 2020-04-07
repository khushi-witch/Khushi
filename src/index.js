import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//js
import $ from'jquery';
import Popper from'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
<App1 />
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
