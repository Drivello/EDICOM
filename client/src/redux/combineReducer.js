import {combineReducers} from 'redux';
import amenitiesReducer from './amenities/reducerAmenities';
import servicesReducer from './services/servicesReducer';
import apartmentReducer from './apartments/apartmentsReducer';

export const reducers = combineReducers({
	amenitiesReducer: amenitiesReducer,
	servicesReducer: servicesReducer,
	apartmentReducer: apartmentReducer,
});

export default reducers;
