import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  //Entourer l'application du BrowserRouter
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);


