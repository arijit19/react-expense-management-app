

const expenseReducerDefaultState = [];

//Reducer

const ExpenseReducer = (state = expenseReducerDefaultState, action)=>{
    switch(action.type)
    {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map( (expense)=> {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                }
                return expense;
            })
        case 'FETCH_EXPENSE':
            return action.expenses
        default:
            return state;
    }
}

export default ExpenseReducer;