import {
	POST_SPENDING,
	GET_SPENDINGS,
	FILTER_SPENDING,
	DELETE_SPENDING,
	PUT_SPENDING,
} from '../spending/actionSpending';

const initialState = {
	addSpending: null,
	totalSpending: [], //cambiar x spending
	filterSpending: [],
};

const SpendingReducer = (state = initialState, action) => {
	switch (action.type) {
		case PUT_SPENDING:
			console.log('Entre al case de PUT_SPENDING en el reducer');
			console.log(state.totalSpending);
			return {...state, filterSpending: action.payload};
		case POST_SPENDING:
			return {...state, filterSpending: state.totalSpending};
		case DELETE_SPENDING: //
			return {...state, addSpending: null};
		case GET_SPENDINGS:
			return {totalSpending: action.payload, filterSpending: action.payload};
		case FILTER_SPENDING:
			if (action.payload.concept === 'All' || action.payload.concept === '') {
				return {
					...state,
					// filterSpending: state.totalSpending,
					filterSpending: state.totalSpending
						.filter(s => {
							return new Date(s.date) >= action.payload.since;
						})
						.filter(s => new Date(s.date) <= action.payload.upTo),
				};
			}

			if (action.payload.concept !== 'All') {
				return {
					...state,
					filterSpending: state.totalSpending
						.filter(s => s.concept === action.payload.concept)
						.filter(s => {
							return new Date(s.date) >= action.payload.since;
						})
						.filter(s => new Date(s.date) <= action.payload.upTo),
				};
			}
			break;
		default:
			return state;
	}
};

export default SpendingReducer;
