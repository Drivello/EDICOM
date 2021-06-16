import axios from 'axios';
import swal from 'sweetalert';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGING_REJECT = 'LOGGING_REJECT';
export const LOGOUT = 'LOGOUT';
export const LOGGING_IN_SUCCESS = 'LOGGING_IN_SUCCESS';

export const loggingIn = (user, swalert) => {
  return function (dispatch) {
    dispatch({ type: LOGGING_IN })
    axios.post('http://localhost:3001/loggings/loggingIn', user)
      .then(res => {
        if (res) {
          localStorage.setItem('profile', JSON.stringify(res.data));
        }
        //llega un objeto con email, token y mensaje. 
        //Token es  email: userRegistered.email, id: userRegistered._id }, secret

        dispatch({
          type: LOGGING_IN_SUCCESS,
          payload: res.data
        })
        return true
      }
        ,
        err => {
          dispatch({
            type: LOGGING_REJECT,
            payload: err,
          });
          swalert({
            title: err?.response?.data?.message?.message,
            text: 'Intente de nuevo',
            icon: `warning`
          })
          return false;
        }
      )
      .then(async (res) => {
        if (res) {
          const message = await JSON.parse(localStorage.getItem('profile'))
          swalert({
            title: message?.message?.message,
            text: 'Bienvenido',
            icon: `success`
          })
        }
      })
  }
}
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT
  })
  swal("Chau culiado!","");
}