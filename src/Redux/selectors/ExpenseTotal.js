const ExpenseTotal = (expenses = [])=>{
    if(!expenses || expenses.length === 0 ) {
        return 0;
    }
    // console.log(expenses.length);
    
    const amounts = expenses.map((expense)=> expense.amount);
    // console.log(amounts.reduce((total, num)=> total+num , 0));
    
    return amounts.reduce((total, num)=> total+num , 0);
}

export default ExpenseTotal;