import axios from 'axios';

export const GET_EXPENSES = 'GET_EXPENSES'

export const getExpenses = function(){
    return function(dispatch){
      return axios.get("http://localhost:3001/")
        .then((res, req) => {
            dispatch({ type: 'GET_EXPENSES', payload: res.data});
      });
    } 
  };