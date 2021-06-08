import {combineReducers} from 'redux';
import amenitiesReducer from './amenities/reducerAmenities';
import servicesReducer from './services/servicesReducer';


export  const reducers = combineReducers({
	amenitiesReducer: amenitiesReducer, 
	servicesReducer: servicesReducer
});

export default reducers

