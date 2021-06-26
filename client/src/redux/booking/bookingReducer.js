import {
	CREATE_BOOKING,
	ALL_BOOKINGS,
	GET_BOOKING_BY_ID,
	DELETE_BOOKING,
	FILTER_BOOKING,
	PUT_BOOKING,
	FILTER_BOOKING_GROUP
} from './bookingActions';

const initialState = {
	bookingCreated: [],
	allBookings: [],
	bookingDetail: [],
	bookingDeleted: [],
	bookingFilter: [],
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
		case FILTER_BOOKING:
			return {
				...state, bookingFilter: state.allBookings.filter(booking => {
					return booking.date === action.payload.start
				})
			};
		case FILTER_BOOKING_GROUP:
			return {
				...state, bookingFilter: action.payload
			}
		default:
			return state;
	}
};

export default reducer;
