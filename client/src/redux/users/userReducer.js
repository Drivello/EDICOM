import {
	CREATE_USER,
	DELETE_USER,
	GET_ALL_USERS,
	GET_USER,
	UPDATE_USER,
	GET_ALL_USERS_FOR_LIST,
	GET_ALL_USERS_BY_BUILDING,
} from '../users/userActions';

const initialState = {
	users: [],
	userDetail: undefined,				//se le está cargando los datos de un user agregandole el idBuilding
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
		case GET_ALL_USERS_FOR_LIST:
			return {
				...state,
				users: action.payload,
			};
		case GET_ALL_USERS_BY_BUILDING:
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
};
export default userReducer;
