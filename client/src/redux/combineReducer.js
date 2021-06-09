import {combineReducers} from 'redux';
import reducerAmenities from './amenities/reducerAmenities';
import servicesReducer from './services/servicesReducer';
import reducerSpending from './spending/reducerSpending';


export  const reducers = combineReducers({
	reducerAmenities: reducerAmenities, 
	servicesReducer: servicesReducer,
	reducerSpending: reducerSpending
});

export default reducers

