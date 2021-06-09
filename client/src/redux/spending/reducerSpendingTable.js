const initialState = {
  totalSpending: [], //cambiar x spending
  filterSpending: []
};

function rootReducerExpenses(state = initialState, action){

  if (action.type === 'getSpendings'){
    return {totalSpending: action.payload, filterSpending: action.payload};
  }

  if (action.type === 'filterSpending'){
    
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
    
  }
  return state
}

export default rootReducerExpenses;

