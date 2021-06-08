import {combineReducers} from 'redux';
import amenitiesReducer from './amenities/reducerAmenities';
import servicesReducer from './services/servicesReducer';
import buildingReducer from './building/buildingReducer';

export  const reducers = combineReducers({
	amenitiesReducer: amenitiesReducer, 
	servicesReducer: servicesReducer,
	buildingReducer: buildingReducer
});

export default reducers;

