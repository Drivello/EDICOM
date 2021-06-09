import { POST_SPENDING } from '../Actions/Index';

const initialState = {
    addSpending: null,
};

const SpendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_SPENDING:
            return { ...state, addSpending: null};
        default:
            return state
    }
};

export default SpendingReducer;