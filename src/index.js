import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import reportWebVitals from './reportWebVitals';


import Fetch from "./projects/fetch-app/App3"
import Login from "./projects/login-app/App"
import Test from "./projects/testArea/App1"
import Todos from "./projects/todo-app/App"
import Products from "./projects/products-app/App"
import Products_v1 from "./projects/products-app/App_v1"
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Fetch />
  </React.StrictMode>,
  document.getElementById('root6')
);
ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root5')
);
ReactDOM.render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>,
  document.getElementById('root4')
);
ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('root3')
);
ReactDOM.render(
  <React.StrictMode>
    <Products />
  </React.StrictMode>,
  document.getElementById('root2')
);
ReactDOM.render(
  <React.StrictMode>
    <Products_v1 />
  </React.StrictMode>,
  document.getElementById('root1')
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
