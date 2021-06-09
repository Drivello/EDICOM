import axios from 'axios';
export const POST_EXPENSES = 'POST_EXPENSES'


//--------------- Formulario --------------------
export function postExpenses(data) {
    //console.log(data);
    return function (dispatch) {
        return axios.post(' http://localhost:3001/spendings/add ', data)
            .then(res => {

                //console.log("RESPUESTA")
                // console.log(res);
                //console.log(" FIN RESPUESTA")
                dispatch({ type: POST_EXPENSES, payload: res });


            })
    }
}

