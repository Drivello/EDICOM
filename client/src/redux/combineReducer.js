import {combineReducers} from 'redux';
import amenitiesReducer from './amenities/reducerAmenities';
import servicesReducer from './services/servicesReducer';
import apartmentReducer from './apartments/apartmentsReducer';
import buildingReducer from './building/buildingReducer';

export const reducers = combineReducers({
	amenitiesReducer: amenitiesReducer,
	servicesReducer: servicesReducer,
	apartmentReducer: apartmentReducer,
	buildingReducer: buildingReducer,
});

export default reducers;
