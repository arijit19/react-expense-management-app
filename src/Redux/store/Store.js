import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import FilterReducer from '../Reducers/FilterReducer.js';
import ExpenseReducer from '../Reducers/ExpenseReducer.js';
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    expenses: ExpenseReducer,
    filters: FilterReducer
}),
    composeEnhanchers(applyMiddleware(thunk))
);

export default store;
