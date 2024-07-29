import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Make sure this file exists
import App from './app'; // Correct the import path
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
