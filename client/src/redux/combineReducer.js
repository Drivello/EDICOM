import {combineReducers} from 'redux';

import reducerSpending from './spending/spendingReducer';
import apartmentReducer from './apartments/apartmentsReducer';
import buildingReducer from './building/buildingReducer';
import reducerExpenses from './expenses/expensesReducer';
import alertsReducer from './alerts/alertsReducer';
import userReducer from './users/userReducer';
import loggingReducer from './logging/loggingReducer';
import amenitiesReducer from './amenities/amenitiesReducer';

export const reducers = combineReducers({
	userReducer: userReducer,
	reducerSpending: reducerSpending,
	apartmentReducer: apartmentReducer,
	buildingReducer: buildingReducer,
	reducerExpenses: reducerExpenses,
	alertsReducer: alertsReducer,
	loggingReducer: loggingReducer,
	amenitiesReducer: amenitiesReducer,
});

export default reducers;
