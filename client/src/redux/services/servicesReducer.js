import { GET_ALL_SERVICES, POST_SERVICE, PUT_SERVICE, DELETE_SERVICE, FIND_SERVICE,
    GET_SERVICES_BUILDING, FILTER_SERVICES } from './servicesAction';

const initialState = {
    allServices: [],
    filteredServices: [],
    findService: {},
    buildingServices: null,
    postStatus: 0,
    putStatus: 0,
    deleteStatus: 0,
}

export default function servicesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SERVICES:
            return {
                ...state,
                allServices: action.payload.data,
            }
        case POST_SERVICE:
            return {
                ...state,
                postStatus: action.payload.status
            }
        case PUT_SERVICE:
            return {
                ...state,
                putStatus: action.payload.status
            }
        case DELETE_SERVICE:
            return {
                ...state,
                deleteStatus: action.payload.status
            }
        case FIND_SERVICE:
            return {
                ...state,
                findService: action.payload.data
            }
        case FILTER_SERVICES:
            return{
                ...state,
                filteredServices: state.filteredServices.filter( (elem) => elem.includes(action.payload) )
            }
        case GET_SERVICES_BUILDING:
            return {
                ...state,
                buildingServices: action.payload.data
            }
        default:
            return state;
    }
}