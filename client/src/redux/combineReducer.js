import {combineReducers} from 'redux';

import reducerSpending from './spending/reducerSpending';
import apartmentReducer from './apartments/apartmentsReducer';
import buildingReducer from './building/buildingReducer';
import reducerExpenses from './expenses/reducerExpenses';
import alertsReducer from './alerts/alertsReducer';
import userReducer from './users/userReducer';
import reducerLogging from './logging/reducerLogging';
import amenitiesReducer from './amenities/amenitiesReducer';

export const reducers = combineReducers({
	userReducer: userReducer,
	reducerSpending: reducerSpending,
	apartmentReducer: apartmentReducer,
	buildingReducer: buildingReducer,
	reducerExpenses: reducerExpenses,
	alertsReducer: alertsReducer,
	reducerLogging: reducerLogging,
	amenitiesReducer: amenitiesReducer,
});

export default reducers;
