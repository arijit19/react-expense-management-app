import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ExpenseItem = ({ id, description, amount, createdAt})=> (
    <div>
        <h3><Link to={`/edit/:${id}`}>Description</Link> : {description}</h3>
        <p>Amount       : {amount}</p>
        <p>CreateAt     : {moment(createdAt).format('Do MMM YYYY')}</p>
    </div>
);

export default ExpenseItem;