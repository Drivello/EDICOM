import {combineReducers} from 'redux';

import reducerSpending from './spending/reducerSpending';
import apartmentReducer from './apartments/apartmentsReducer';
import buildingReducer from './building/buildingReducer';
import alertsReducer from './alerts/alertsReducer';


export  const reducers = combineReducers({ 
	reducerSpending: reducerSpending,
	apartmentReducer: apartmentReducer,
	buildingReducer: buildingReducer,
	alertsReducer: alertsReducer
})


export default reducers;
