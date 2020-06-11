import {createStore, combineReducers} from 'redux';
// import t from '../'
import FilterReducer from '../Reducers/FilterReducer.js';

import ExpenseReducer from '../Reducers/ExpenseReducer.js';


const store = createStore(combineReducers({
    expenses: ExpenseReducer,
    filters: FilterReducer
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
