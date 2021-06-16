import { combineReducers } from 'redux';

import reducerSpending from './spending/reducerSpending';
import apartmentReducer from './apartments/apartmentsReducer';
import buildingReducer from './building/buildingReducer';
import reducerExpenses from './expenses/reducerExpenses';
import alertsReducer from './alerts/alertsReducer';
import reducerLogging from './logging/reducerLogging'

export const reducers = combineReducers({
	reducerSpending: reducerSpending,
	apartmentReducer: apartmentReducer,
	buildingReducer: buildingReducer,
	reducerExpenses: reducerExpenses,
	alertsReducer: alertsReducer,
	reducerLogging: reducerLogging
})


export default reducers;
