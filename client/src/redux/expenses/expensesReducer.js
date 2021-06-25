import { GET_EXPENSES, FILTER_EXPENSES, POST_EXPENSES } from '../expenses/expensesActions';


const initialState = {
    expensesArray: [],
    filterArray: []
};


const expensesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_EXPENSES:
            return { expensesArray: action.payload, filterArray:action.payload };

        case POST_EXPENSES:
            return state

        case FILTER_EXPENSES:
            console.log("action.payload", action.payload)
            if(action.payload.building === "All"){
                return { ...state, filterArray: state.expensesArray};
            }
            else{
                if(action.payload.apartment!=="All"){
                    return { ...state, 
                        filterArray: state.expensesArray
                        .filter(b => b.buildingId === action.payload.building)
                        .filter(c => c.number_apartment === action.payload.apartment)
                    };
                }
                return { ...state, 
                filterArray: state.expensesArray
                .filter(b => b.buildingId === action.payload.building)};
            }

        default:
            return state
                
    }
}



export default expensesReducer;