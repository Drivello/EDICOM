import { GET_EXPENSES } from '../expenses/expensesActions';


const initialState = {
    expensesArray: []

};


const expensesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_EXPENSES:

            return { expensesArray: action.payload };

            default:
                return state
                
    }
}
export default expensesReducer;