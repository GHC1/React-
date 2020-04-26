import React from 'react';
import ReactDOM from 'react-dom';
// import App from '../src/layouts/App';
import './assets/iconfont/iconfont.css'
import {BrowserRouter,Route} from 'react-router-dom'
import Defules from './layouts/default'
import './plugins/axios'
ReactDOM.render(
  <BrowserRouter>
    <Route component={Defules}/>
  </BrowserRouter>,
  document.getElementById('root')
);

