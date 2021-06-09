import {combineReducers} from 'redux';

import reducerSpending from './spending/reducerSpending';
import apartmentReducer from './apartments/apartmentsReducer';
import buildingReducer from './building/buildingReducer';


export  const reducers = combineReducers({ 
	reducerSpending: reducerSpending,
	apartmentReducer: apartmentReducer,
	buildingReducer: buildingReducer,
})


export default reducers;
