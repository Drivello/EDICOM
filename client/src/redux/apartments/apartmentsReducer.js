import {Actions} from './apartmentsActions';

const initialState = {
	apartmentCreated: [],
	apartmentDetail: [],
	allApartments: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.CREATE_APARTMENT:
			return {
				...state,
				apartmentCreated: [...state.apartmentCreated, action.payload],
			};
		case Actions.ALL_APARTMENTS:
			return {
				...state,
				allApartments: action.payload,
			};
		case Actions.GET_APARTMENT:
			return {
				...state,
				apartmentDetail: action.payload,
			}
		default:
			return state;
	}
};

export default reducer;

