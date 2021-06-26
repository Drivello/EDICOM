import { GET_ALL_COMPLAINTS, PUT_SEEN_COMPLAINT, PUT_STATE_COMPLAINT, FILTER_COMPLAINTS } from './complaintsActions';
import { filterComplaints } from './utils';

const initialState = {
    allComplaints: [],
    filteredComplaints: [],
    seenStatus: 0
}

export default function buildingReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COMPLAINTS:
            return {
                ...state,
                allComplaints: action.payload.data,
                filteredComplaints: action.payload.data
            }
        case PUT_SEEN_COMPLAINT:
            return {
                ...state,
                seenStatus: action.payload.status
            }
        case PUT_STATE_COMPLAINT:
            return {
                ...state,
                stateStatus: action.payload.status
            }
        case FILTER_COMPLAINTS:
            return {
                ...state,
                filteredComplaints: filterComplaints(state.allComplaints, action.payload.building, action.payload.importance, action.payload.status)
            }

        default:
            return state;
    }
}