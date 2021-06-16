import {
	CREATE_USER,
	DELETE_USER,
	GET_ALL_USERS,
	GET_USER,
	UPDATE_USER,
} from '../users/userActions';

const initialState = {
	users: [],
	buildingUsers: [],
	userDetail: {},
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_USERS:
			return {
				...state,
				users: action.payload,
			};
		case CREATE_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		case GET_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		case UPDATE_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		case DELETE_USER:
			return {
				...state,
				userDetail: action.payload,
			};
		default:
			return state;
	}
};
export default userReducer;
