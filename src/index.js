import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

function main() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);