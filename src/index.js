import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import reportWebVitals from './reportWebVitals';

import StyledComponent2 from "./projects/styled-component2/App"
import StyledComponent from "./projects/styled-component/App"
import Tasklist from "./projects/prioritized-tasklist/App"
import ContextApi from "./projects/context-api/App"
import Routing from "./projects/routing/App"
import Recipe from "./projects/recipe-app/App"
import Counter from "./projects/simple-counter/App"
import Meme from "./projects/meme-generator/App"
import Form from "./projects/forms/App"
import Fetch from "./projects/fetch-app/App2"
import Login from "./projects/login-app/App"
import Test from "./projects/testArea/App1"
import ShopCounter from "./projects/shop-counter/App"
import Todos from "./projects/todo-app/App"
import Products from "./projects/products-app/App"
import Products_v1 from "./projects/products-app/App_v1"
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <StyledComponent2 />
  </React.StrictMode>,
  document.getElementById('root15')
);

ReactDOM.render(
  <React.StrictMode>
    <StyledComponent />
  </React.StrictMode>,
  document.getElementById('root14')
);


ReactDOM.render(
  <React.StrictMode>
    <Tasklist />
  </React.StrictMode>,
  document.getElementById('root13')
);

ReactDOM.render(
  <React.StrictMode>
    <ContextApi />
  </React.StrictMode>,
  document.getElementById('root12')
);

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root11')
);

ReactDOM.render(
  <React.StrictMode>
    <Recipe />
  </React.StrictMode>,
  document.getElementById('root10')
);

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root9')
);

ReactDOM.render(
  <React.StrictMode>
    <Meme />
  </React.StrictMode>,
  document.getElementById('root8')
);

ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById('root7')
);

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
    <ShopCounter />
  </React.StrictMode>,
  document.getElementById('root2a')
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
