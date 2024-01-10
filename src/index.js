import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store'
import ThemeApp from './ThemeApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={configureStore()}>  <BrowserRouter>   
   <ThemeApp />
  </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
