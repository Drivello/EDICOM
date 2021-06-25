import axios from 'axios';
export const CREATE_BOOKING = 'CREATE_BOOKING';
export const ALL_BOOKINGS = 'ALL_BOOKINGS';
export const GET_BOOKING_BY_ID = 'GET_BOOKING_BY_ID';
export const DELETE_BOOKING = 'DELETE_BOOKING';

export function createBooking(booking) {
	return async function (dispatch) {
		const {data} = await axios.post(`http://localhost:3001/bookings/`, booking);
		dispatch({type: CREATE_BOOKING, payload: data});
	};
}

export function allBookings() {
	return async function (dispatch) {
		const {data} = await axios.get(`http://localhost:3001/bookings/`);
		dispatch({type: ALL_BOOKINGS, payload: data});
	};
}

export function getBookingById(userId) {
	return async function (dispatch) {
		const {data} = await axios.get(`http://localhost:3001/bookings/${userId}`);
		dispatch({type: GET_BOOKING_BY_ID, payload: data});
	};
}

export function deleteBooking(bookingId) {
	return async function (dispatch) {
		const {data} = await axios.delete(
			`http://localhost:3001/bookings/${bookingId}`
		);
		dispatch({type: DELETE_BOOKING, payload: data});
	};
}
