import {combineReducers} from 'redux';
import reducerAmenities from './amenities/reducerAmenities';
import servicesReducer from './services/servicesReducer';
import reducerExpensesTable from './expenses/reducerExpensesTable';


export  const reducers = combineReducers({
	reducerAmenities: reducerAmenities, 
	servicesReducer: servicesReducer,
	reducerExpensesTable: reducerExpensesTable // ???????????????????
});

export default reducers

