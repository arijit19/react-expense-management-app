import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { render } from '@testing-library/react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import {Provider} from 'react-redux';

import AppRouter from './AppRouter/AppRouter.js';
import ConfigStore from './Redux/store/Store.js';
import ExpenseSelector from './Redux/selectors/ExpenseSelector.js'

// import {SetEndDate, SetStartDate, SetTextFilter, SortByAmount, SortByDate} from './Redux/ActionGenerations/FilterActionGenerator/FilterActions.js'
// import {AddExpense, RemoveExpense, EditExpense} from './Redux/ActionGenerations/ExpenseActionGenerator/ExpenseActions.js'

const store = ConfigStore;

store.subscribe(()=>{
  const state = store.getState();
  const view = ExpenseSelector(state.expenses, state.filters);
  // console.log(view);
});

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
      
    );
  }
}

export default App;

// console.log('---------Add Expense----------');
// store.dispatch(AddExpense({ description: 'Rent', amount: 100, createdAt: -1234 }));
// store.dispatch(AddExpense({ description: 'Coffee', amount: 1000, createdAt: 0 }));
// store.dispatch(AddExpense({ description: 'Games', amount: 500, createdAt: 12345 }));
// store.dispatch(AddExpense({ description: 'Magz', amount: 700, createdAt: 1235 }));
// store.dispatch(AddExpense({ description: 'Cycly', amount: 7100, createdAt: 15 }));
// console.log('---------Edit Expense----------');
// store.dispatch(EditExpense('0.45422830009134607',{ description: 'Stuff'}));
// console.log('---------Remove Expense----------');
// store.dispatch(RemoveExpense({ id:'df75fb09-ea9a-4a9d-bfe4-2445b44efc4b' }));
// console.log('---------Expense Filters----------');
// console.log('------Expense Text Filters--------');
// store.dispatch(SetTextFilter('Rent'));
// store.dispatch(SetTextFilter(''));
// console.log('------Expense SortBy Amount--------');
// store.dispatch(SortByAmount());
// console.log('------Expense SortBy Date--------');
// store.dispatch(SortByDate());
// console.log('------Expense StartDate Filters--------');
// store.dispatch(SetStartDate({startDate: 1234}));
// console.log('------Expense EndDate Filters--------');
// store.dispatch(SetEndDate({endDate: 1234}));
