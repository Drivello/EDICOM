import axios from 'axios';

export const POST_PAYMENT = 'POST_PAYMENT';


//http://localhost:3001/ratings

export const addPayment = (title, price, quantity = 1) =>  {

    console.log('title y price', title, price)
    return function (dispatch) {
        return axios.post(`http://localhost:3001/payment/add/${title}/${price}/${quantity}`)
        .then(res => {
            dispatch({
                type: POST_PAYMENT,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}
