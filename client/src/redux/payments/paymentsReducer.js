import { POST_PAYMENT  } from '../payments/paymentsActions';


const initialState = {
    urlPayment: ''
};


const paymentsReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_PAYMENT:
            return {...state, urlPayment: action.payload};

        default:
            return state

    }
}


export default paymentsReducer;