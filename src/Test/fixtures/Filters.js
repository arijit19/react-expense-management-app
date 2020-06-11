import moment from 'moment';

export const defaultfilters = {
    startDate: undefined,
    endDate: undefined,
    text: '',
    sortBy: 'date'
};

export const startEndDatefilters = {
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    text: '',
    sortBy: 'date'
};

export const sortByAmountfilters = {
    startDate: undefined,
    endDate: undefined,
    text: '',
    sortBy: 'amount'
};

export const textfilters = {
    startDate: undefined,
    endDate: undefined,
    text: 'Rent',
    sortBy: 'date'
};