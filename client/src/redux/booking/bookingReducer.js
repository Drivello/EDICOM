import {
	CREATE_BOOKING,
	ALL_BOOKINGS,
	GET_BOOKING_BY_ID,
	PUT_BOOKING,
} from './bookingActions';

const initialState = {
	bookingCreated: [],
	allBookings: [],
	bookingDetail: [],
	putBooking: [],
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
		case PUT_BOOKING:
			return {
				...state,
				putBooking: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
