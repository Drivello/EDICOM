import {
	CREATE_BOOKING,
	ALL_BOOKINGS,
	GET_BOOKING_BY_ID,
	DELETE_BOOKING,
} from './bookingActions';

const initialState = {
	bookingCreated: [],
	allBookings: [],
	bookingDetail: [],
	bookingDeleted: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_BOOKING:
			return {
				...state,
				bookingCreated: [...state.bookingCreated, action.payload],
			};
		case ALL_BOOKINGS:
			return {
				...state,
				allBookings: action.payload,
			};
		case GET_BOOKING_BY_ID:
			return {
				...state,
				bookingDetail: action.payload,
			};
		case DELETE_BOOKING:
			return {
				...state,
				bookingDeleted: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
