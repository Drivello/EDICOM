import { LOGGING_REJECT, LOGOUT ,LOGGING_IN_SUCCESS, SEND_EMAIL, TOKEN_TO_EMAIL} from './loggingActions';


const initialState = {
    authData: {
        first_logging: null,
        message: null,
        name: null,
        token: null
    },
    success: false,
    err: {},
    recoveryMail: null,
};


const loggingReducer = (state = initialState, action) => {

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
            return { ...state, authData: initialState.authData }

        case SEND_EMAIL:
            console.log("llega al SEND_EMAIL del reducer")
            alert("Revise su correo")
            return {...state}


        case TOKEN_TO_EMAIL:
            console.log("action.payload", action.payload);
            return {
                ...state, recoveryMail: action.payload.mail
            }
        
        default:
            return state
    }
}
export default loggingReducer;