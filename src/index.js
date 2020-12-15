import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
  <App /> : Component (Data를 보여줌)
　　　　　　　HTML 을 반환하는 함수! (App.js)
　　　　　　　React 는 Component와 함께 동작  
　 # javascript 와 HTML 사이의 조합 : jsx (react 특화된   개념)
*/

/*
  React Application은 하나의 component만을  Rendering 함.
*/