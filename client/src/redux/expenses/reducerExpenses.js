import { GET_EXPENSES} from '../expenses/actionExpenses';


const initialState = {
    totalExpenses=[]
};


const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
case GET_SPENDINGS:
    return {totalExpenses: action.payload};
    
    break;
    default:
        return state
}
}
export default expensesReducer;