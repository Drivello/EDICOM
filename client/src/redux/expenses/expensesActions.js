import axios from 'axios';

export const GET_EXPENSES = 'GET_EXPENSES';
export const FILTER_EXPENSES = 'FILTER_EXPENSES';
export const POST_EXPENSES = 'POST_EXPENSES';



export const getExpenses = () =>  {
  return function (dispatch) {
    return axios.get('http://localhost:3001/expenses/allByApartments')
      .then(res => {
        dispatch({
          type: GET_EXPENSES,
          payload: res.data
        })
      })
  }
}

export const postExpenses = (idBuilding, month, year) =>  {
  return function (dispatch) {
    return axios.post(`http://localhost:3001/expenses/add/${month}/${year}`)
      .then(res => {
        dispatch({
          type: POST_EXPENSES,
          // payload: res.data
        })
      })
  }
}

export function filterExpenses(payload) {
	return {type: 'FILTER_EXPENSES', payload};
}
