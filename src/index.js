import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <div onClick={() => console.log("app click")} className='app'>
    <App />
  </div>
  // </React.StrictMode>
);

console.log("app dom", document.getElementsByClassName("app")[0]);

requestIdleCallback(() => {
  console.log("app dom", document.getElementsByClassName("app")[0]);

  const app = document.getElementsByClassName("app")[0];

  // app.addEventListener("click", (e) => e.stopPropagation())
})