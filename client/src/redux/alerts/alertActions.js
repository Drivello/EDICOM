import axios from 'axios';
import { GET_ALL_ALERTS_URL, POST_ALERT_URL, PUT_ALERT_URL, DELETE_ALERT_URL,  FIND_ALERT_URL} from './utils';
export const GET_ALL_ALERTS = 'GET_ALL_ALERTS';
export const POST_ALERT = 'POST_ALERT';
export const PUT_ALERT = 'PUT_ALERT';
export const DELETE_ALERT = 'DELETE_ALERT';
export const FIND_ALERT = 'FIND_ALERT';
export const FILTER_ALERTS = 'FILTER_ALERTS';

export function getAlerts() {
    return function(dispatch) {
        return axios.get(GET_ALL_ALERTS_URL)
        .then(data => {
            dispatch({
                type: GET_ALL_ALERTS,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_ALERTS,
                payload: {
                    data: "error"
                }
            })
        })
    }
}


export function postAlert(body) {
    return function(dispatch){
        return axios.post(POST_ALERT_URL,body)
        .then(status => {
            dispatch({
                type: POST_ALERT,
                payload: status
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_ALERTS,
                payload: {
                    status: "error"
                }
            })
        })
    }
}

export function putBuilding(body) {
    return function(dispatch){
        return axios.put(PUT_ALERT_URL,body)
        .then(status => {
            dispatch({
                type: PUT_ALERT,
                payload: status
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_ALERTS,
                payload: {
                    status: "error"
                }
            })
        })
    }
}

export function deleteBuilding(id) {
    return function(dispatch) {
        return axios.delete(`${DELETE_ALERT_URL}/${id}`)
        .then(data => {
            dispatch({
                type: DELETE_ALERT,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_ALERTS,
                payload: {
                    status: "error"
                }
            })
        })
    }
}

export function filterAlerts(payload) {
	return {type: FILTER_ALERTS, payload};
}

export function findAlert(id) {
    return function(dispatch) {
        return axios.get(`${FIND_ALERT_URL}/${id}`)
        .then(data => {
            dispatch({
                type: FIND_ALERT,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ALL_ALERTS,
                payload: {
                    status: "error"
                }
            })
        })
    }
}