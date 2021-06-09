import {combineReducers} from 'redux';
import reducerAmenities from './amenities/reducerAmenities';
import servicesReducer from './services/servicesReducer';
import reducerExpensesTable from './spending/reducerSpendingTable';


export  const reducers = combineReducers({
	reducerAmenities: reducerAmenities, 
	servicesReducer: servicesReducer,
	reducerExpensesTable: reducerExpensesTable // ???????????????????
});

export default reducers

