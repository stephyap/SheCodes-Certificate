import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

//npx create-react-app .
//npm start
//npm update
//*control c to stop 
// if getting error to try to restart and it doesn't work
// npm install -g npm@latest
// rm -rf node_modules
// npm install

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
