import {combineReducers} from 'redux';

import reducerSpending from './spending/reducerSpending';
import apartmentReducer from './apartments/apartmentsReducer';
import buildingReducer from './building/buildingReducer';
import reducerExpenses from './expenses/reducerExpenses';

export  const reducers = combineReducers({ 
	reducerSpending: reducerSpending,
	apartmentReducer: apartmentReducer,
	buildingReducer: buildingReducer,
	reducerExpenses: reducerExpenses
})


export default reducers;
