import { LOGGING_REJECT, LOGOUT ,LOGGING_IN_SUCCESS, SEND_EMAIL} from './loggingActions';



const initialState = {
    authData: null,
    success: false,
    err: {},
};


const reducerLogging = (state = initialState, action) => {

    switch (action.type) {
       //elimine reducer normal 

        case LOGGING_IN_SUCCESS:{
            return{
                ...state,
                authData:action.payload,
                success:true
            }
        }

        case LOGGING_REJECT:
            return {
                ...state,
                err: action.payload,
            };

        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null }

        case SEND_EMAIL:
            console.log("llega al SEND_EMAIL del reducer")
            return (alert("Revise su correo"))
        
        default:
            return state
    }
}
export default reducerLogging;