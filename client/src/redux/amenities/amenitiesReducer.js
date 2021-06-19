import {
	CREATE_AMENITY,
	DELETE_AMENITY,
	GET_ALL_AMENITIES,
	GET_AMENITY_BY_ID,
	UPDATE_AMENITY,
} from '../amenities/amenitiesActions';

const initialState = {
	Amenities: [],
};

const amenitiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_AMENITIES:
			return {
				...state,
				Amenities: action.payload,
			};
		case CREATE_AMENITY:
			return {
				...state,
				userDetail: action.payload,
			};
		case GET_AMENITY_BY_ID:
			return {
				...state,
				userDetail: action.payload,
			};
		case UPDATE_AMENITY:
			return {
				...state,
				userDetail: action.payload,
			};
		case DELETE_AMENITY:
			return {
				...state,
				userDetail: action.payload,
			};
		default:
			return state;
	}
};
export default amenitiesReducer;
