import axios from 'axios';

export const ADD_RATINGS = 'ADD_RATINGS';
export const PUT_RATINGS = 'PUT_RATINGS';
export const GET_RATINGS = 'GET_RATINGS';
export const DELETE_RATINGS = 'DELETE_RATINGS';
export const RATINGS_BY_SERVICE = 'RATINGS_BY_SERVICE';

///ratings

export const addRating = (body) =>  {
    return function (dispatch) {
        return axios.post('/ratings', body)
        .then(res => {
            dispatch({
                type: ADD_RATINGS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function putRating(body) {
    return function(dispatch) {
        return axios.put(`/ratings`, body)
        .then(data => {
            dispatch({
                type: PUT_RATINGS,
                payload: data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function allRatings() {
    return function(dispatch) {
        return axios.put(`/ratings/all`)
        .then(data => {
            dispatch({
                type: GET_RATINGS,
                payload: data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function deleteRating(id) {
    return function(dispatch) {
        return axios.delete(`/ratings/${id}`)
        .then(data => {
            dispatch({
                type: DELETE_RATINGS,
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export function ratingsByService(idService) {
    console.log('entre en accion')
    return function(dispatch) {
        return axios.get(`/ratings/all/${idService}`)
        .then(data => {
            dispatch({
                type: RATINGS_BY_SERVICE,
                payload: data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}