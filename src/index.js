import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.scss';
import App  from './App';
import * as serviceWorker from './serviceWorker';


import {StartFetchExpense} from './Redux/Actions/ExpenseActions.js'
import {firebase} from './firebase/firebase.js';
import ConfigStore from './Redux/store/Store.js';
import  { SetAuthAction } from './Redux/Actions/AuthActions.js'
import LoadingPage from './components/LoadingPage.js'

export const store = ConfigStore;
ReactDOM.render(<LoadingPage/>,document.getElementById('root'));

async function run() {
  firebase.auth().onAuthStateChanged( async function(user){
    if(user) {
      console.log("LogIn---------");
      await store.dispatch(SetAuthAction({UID: user.uid}));
      await store.dispatch(StartFetchExpense());
    }
    else {
      console.log("Logout");
      await store.dispatch(SetAuthAction({UID: undefined}));
    }
    ReactDOM.render(
      <App />,
    document.getElementById('root')); 
  })
}

run()







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
