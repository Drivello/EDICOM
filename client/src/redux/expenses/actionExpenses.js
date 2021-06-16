import axios from 'axios';

export const GET_EXPENSES = 'GET_EXPENSES';



export const getExpenses =()=>  {
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