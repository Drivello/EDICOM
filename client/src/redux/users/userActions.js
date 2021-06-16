import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const CREATE_USER = 'CREATE_USER';
export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export function getALLUsers(id_building,id_apartment = undefined) {
	return async function (dispatch) {
		var {data} = await axios.get(
			`http://localhost:3001/users/all/${id_building}`
		);
		if(id_apartment !== undefined){
			data = data.filter(u => u.apartmentId === id_apartment)
		}
		dispatch({type: GET_ALL_USERS, payload: data});
	};
}

export function createUser(user) {
	return async function (dispatch) {
		const {data} = await axios.post(`http://localhost:3001/users/`, user);
		dispatch({type: CREATE_USER, payload: data});
	};
}

export function getUser(id) {
	return async function (dispatch) {
		const {data} = await axios.get(`http://localhost:3001/users/${id}`);
		dispatch({type: GET_USER, payload: data});
	};
}

export function updateUser(user) {
	return async function (dispatch) {
		const {data} = await axios.put(
			`http://localhost:3001/users/${user.id}`,
			user
		);
		dispatch({type: UPDATE_USER, payload: data});
	};
}

export function deleteUser(id) {
	return async function (dispatch) {
		const {data} = await axios.delete(
			`http://localhost:3001/users/delete/${id}`
		);
		dispatch({type: DELETE_USER, payload: data});
	};
}
