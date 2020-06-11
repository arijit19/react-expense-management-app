import { v4 as uuidv4 } from 'uuid';

const AddExpense = (
    {
        description = '',
        note= '',
        amount= 0,
        createdAt =0
    }={}
)=>(
    {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
    }
);

export default AddExpense;