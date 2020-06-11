import moment from 'moment';

import { SetStartDate, SetEndDate, SortByAmount, SortByDate, SetTextFilter} from '../../../Redux/Actions/FilterActions.js'

//test()

test('Testing to set start date filter', ()=>{
    expect(SetStartDate({startDate: moment(0)})).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Testing to set end date filter', ()=>{
    expect(SetEndDate({endDate: moment(0)})).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('Testing to set text filter(With pass the text value as params)', ()=>{
    expect(SetTextFilter('Rent')).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    });
});

test('Testing to set text filter(Without pass the text value as params)', ()=>{
    expect(SetTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Testing to sort items by Date', ()=>{
    expect(SortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Testing to sort items by Amount', ()=>{
    expect(SortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});