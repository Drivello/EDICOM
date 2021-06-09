import axios from 'axios';
export const POST_SPENDING = 'POST_SPENDING'


//--------------- Formulario --------------------
export function postSpending(data) {
    console.log("ENTRO ", data);
    return function (dispatch) {
        return axios.post(' http://localhost:3001/spendings/add ', data)
            .then(res => {

                //console.log("RESPUESTA")
                // console.log(res);
                //console.log(" FIN RESPUESTA")
                dispatch({ type: POST_SPENDING, payload: res });


            })
    }
}

