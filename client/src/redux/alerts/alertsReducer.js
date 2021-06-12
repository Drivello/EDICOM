import {GET_ALL_ALERTS, POST_ALERT, PUT_ALERT, DELETE_ALERT } from './alertActions';

const initialState = {
    allAlerts: [],
    postStatus: 0,
    putStatus: 0,
    deleteStatus: 0
}

export default function alertsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ALERTS:
            return {
                ...state,
                allAlerts: action.payload.data
            }
        case POST_ALERT:
            return {
                ...state,
                postStatus: action.payload.status
            }
        case PUT_ALERT:
            return {
                ...state,
                putStatus: action.payload.status
            }
        case DELETE_ALERT:
            return {
                ...state,
                deleteStatus: action.payload.status
            }
        default:
            return state;
    }
}