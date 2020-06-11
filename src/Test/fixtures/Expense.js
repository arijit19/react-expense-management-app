import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 20000,
    createdAt: moment(0).valueOf()
},{
    id: '2',
    description: 'Game',
    note: '',
    amount: 1000,
    createdAt: moment(0).subtract(4,'day').valueOf()
},{
    id: '3',
    description: 'Internet',
    note: '',
    amount: 2500,
    createdAt: moment(0).add(4,'day').valueOf()
}
];

export default expenses;