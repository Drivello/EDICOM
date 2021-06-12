import { GET_EXPENSES } from '../expenses/actionExpenses';


const initialState = {
    expensesArray: []

};


const expensesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_EXPENSES:

            return { expensesArray: action.payload };

        case GET_EXPENSES:
            return {
                ...state,
                expensesArray: action.payload.data
            }

            break;
        default:
            return state
    }
}
export default expensesReducer;