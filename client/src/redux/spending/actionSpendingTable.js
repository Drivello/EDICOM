// import axios from 'react'


// -------------------------- el posta es este-------------------------
// export const totalSpending = function(){
//   return function(dispatch){
//     return axios.get(".......") // eswpero q mauri me pase la ruta
//       .then(response => response.json()) //pasala de JASON a JS
//       .then(json => {
//           dispatch({ type: 'getExpenses', payload: json }); // esta es la accion propiamente dicha.
//     });
//   } 
// };
// -------------------------- prueba -------------------------




// ---------------------- ejemplo hardodeado------------------
const payload = [
  {date:'1/1/2021',concept:'aaa',details:'bbb',suplier:'ccc',amount:'1000',building:'1'},
  {date:'1/2/2021',concept:'ddd',details:'eee',suplier:'fff',amount:'2000',building:'2'},
  {date:'1/4/2021',concept:'ggg',details:'hhh',suplier:'iii',amount:'3000',building:'3'},
  {date:'1/3/2021',concept:'jjj',details:'kkk',suplier:'lll',amount:'4000',building:'4'}]


export const totalSpending = function(){
  return {type: 'getSpendings', payload}; 
};

export const filterSpending = function(payload){
  return {type: 'filterSpending', payload}; 
};
// ---------------------- fin ejemplo hardodeado------------------