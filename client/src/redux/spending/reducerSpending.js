import { POST_SPENDING, GET_SPENDINGS, FILTER_SPENDING } from '../spending/actionSpending';

const initialState = {
    addSpending: null,
    totalSpending: [], //cambiar x spending
    filterSpending: []
};

const SpendingReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_SPENDING:
            return { ...state, addSpending: null};
        case GET_SPENDINGS:
          // console.log(action.payload)
            return {totalSpending: action.payload, filterSpending: action.payload};
        case  FILTER_SPENDING:
            if(action.payload.concept==="All"){
                return {...state, 
                  filterSpending: state.totalSpending
                  // .filter(s => s.date >= action.payload.since)
                  // .filter(s => s.date <= action.payload.upTo)
                };
              }
          
              if(action.payload.concept!=="All"){
                return {...state,
                  filterSpending: state.totalSpending
                  .filter(s => s.concept === action.payload.concept)
                  // .filter(s => s.date >= action.payload.since)
                  // .filter(s => s.date <= action.payload.upTo)
                };
              }
        default:
            return state
    }
};

export default SpendingReducer;


  