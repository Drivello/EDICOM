import axios from 'axios';
export const POST_SPENDING = 'POST_SPENDING'
export const GET_SPENDINGS = 'GET_SPENDINGS'
export const FILTER_SPENDING = 'FILTER_SPENDINGS'

//--------------- Formulario --------------------
export function postSpending(data) {
   
    return function (dispatch) {
        return axios.post(' http://localhost:3001/spendings/add ', data)
            .then(res => {
                dispatch({ type: POST_SPENDING, payload: res });
            })
    }
}


// -------------------------- el posta es este-------------------------
export const totalSpending = function(){
  return function(dispatch){
    return axios.get("http://localhost:3001/spendings/all")
      // .then(response => response.json())
      .then((res, req) => {
          dispatch({ type: 'GET_SPENDINGS', payload: res.data});
    });
  } 
};
// -------------------------- prueba -------------------------




// ---------------------- ejemplo hardodeado------------------
// const payload = [
//     {date:'1/1/2021',concept:'aaa',details:'bbb',suplier:'ccc',amount:'1000',building:'1'},
//     {date:'1/2/2021',concept:'ddd',details:'eee',suplier:'fff',amount:'2000',building:'2'},
//     {date:'1/4/2021',concept:'ggg',details:'hhh',suplier:'iii',amount:'3000',building:'3'},
//     {date:'1/3/2021',concept:'jjj',details:'kkk',suplier:'lll',amount:'4000',building:'4'}]
  
  
//   export const totalSpending = function(){
//     return {type: 'GET_SPENDINGS', payload}; 
//   };
  
  export const filterSpending = function(payload){
    return {type: 'FILTER_SPENDINGS', payload}; 
  };
  // ---------------------- fin ejemplo hardodeado------------------

