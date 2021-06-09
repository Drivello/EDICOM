import { POST_ACTIVITY } from '../Actions/Index';

const initialState = {

    addExpenses: null,
};

const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_EXPENSES:
            return { ...state, addExpenses: null};
        default:
            return state
    }
};

export default expensesReducer;