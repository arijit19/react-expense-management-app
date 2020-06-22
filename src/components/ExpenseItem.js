import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseItem = ({ id, description, amount, createdAt})=> (
    <div>
        <Link to={`/edit/:${id}`} className='list-item'>
            <div>
                <h3 className='list-item__title'>{description}</h3>
                <span className='list-item__sub-title'>{moment(createdAt).format('Do MMM YYYY')}</span>
            </div>
            <h3 className='list-item__data'>{numeral(amount).format('$0,0.00')}</h3>
        </Link>
    </div>
);

export default ExpenseItem;