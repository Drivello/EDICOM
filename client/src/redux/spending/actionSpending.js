import axios from 'axios';
export const POST_SPENDING = 'POST_SPENDING';
export const PUT_SPENDING = 'PUT_SPENDING';
export const GET_SPENDINGS = 'GET_SPENDINGS';
export const FILTER_SPENDING = 'FILTER_SPENDINGS';
export const DELETE_SPENDING = 'DELETE_SPENDINGS';

export function postSpending(data) {
	return function (dispatch) {
		return axios
			.post(' http://localhost:3001/spendings/add ', data)
			.then(res => {
				dispatch({type: POST_SPENDING, payload: res.data});
			});
	};
}

export function putSpending(data) {
	console.log('entrando a la action putSpending');
	return function (dispatch) {
		console.log(data);
		return axios
			.put(' http://localhost:3001/spendings/add ', data)
			.then(res => {
				console.log('Se resolvió la action de putSpending');
				console.log(res);
				dispatch({type: PUT_SPENDING, payload: res.data});
			});
	};
}

//-------------------ver delete------------------------
export function deleteSpending(id) {
	return function (dispatch) {
		return (
			axios
				.delete(` http://localhost:3001/spendings/del/${id} `) // ver
				// .then(response => response.json())
				.then(res => {
					dispatch({type: DELETE_SPENDING, payload: res});
				})
		);
	};
}
//-------------------ver delete------------------------

export function totalSpending() {
	return function (dispatch) {
		return (
			axios
				.get('http://localhost:3001/spendings/all')
				// .then(response => response.json())
				.then((res, req) => {
					dispatch({type: GET_SPENDINGS, payload: res.data});
				})
		);
	};
}

export function filterSpending(payload) {
	console.log('action filterSpending');
	return {type: 'FILTER_SPENDINGS', payload};
}
