import {
	POST_SPENDING,
	GET_SPENDINGS,
	FILTER_SPENDING,
	DELETE_SPENDING,
	PUT_SPENDING,
	GET_BUILDING_SPENDINGS
} from '../spending/actionSpending';

const initialState = {
	addSpending: null,
	totalSpending: [], //cambiar x spending
	filterSpending: [],
	buildingSpendings: []
};

const SpendingReducer = (state = initialState, action) => {
	switch (action.type) {
		case PUT_SPENDING:
			return {...state, filterSpending: action.payload};
		case POST_SPENDING:
			console.log('Entre al case de POST_SPENDING en el reducer');
			console.log('estado anterior: ', state.totalSpending);
			console.log('action.payload: ', action.payload);
			return {...state, filterSpending: action.payload};
		case DELETE_SPENDING: //
			return {...state, filterSpending: action.payload};
		case GET_SPENDINGS:
			return {totalSpending: action.payload, filterSpending: action.payload};
		case GET_BUILDING_SPENDINGS:
			return {
				...state,
				buildingSpendings: action.payload.data
			}
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
