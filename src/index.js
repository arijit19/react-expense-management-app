import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App , {store} from './App';
import * as serviceWorker from './serviceWorker';

import {StartFetchExpense} from './Redux/Actions/ExpenseActions.js'

async function run(){
  ReactDOM.render(<p>Loading......</p>,document.getElementById('root')
  );
  await store.dispatch(StartFetchExpense())
  ReactDOM.render(
    // <React.StrictMode>
      <App />,
    // </React.StrictMode>,
    document.getElementById('root')
  );
}
run();
// ReactDOM.render(
//   // <React.StrictMode>
//     <App />,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
