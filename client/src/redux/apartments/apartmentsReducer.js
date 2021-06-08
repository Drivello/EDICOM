import {Actions} from './apartmentsActions';

const initialState = {
	apartmentCreated: [],
	allApartments: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.CREATE_APARTMENT:
			return {
				...state,
				apartmentCreated: [...state.apartmentCreated, action.payload],
			};
		case Actions.ALL_APARTMENTS:
			return {
				...state,
				allApartments: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;

// case GET_POKEMONS:
// 	return {
// 		...state,
// 		API_Pokemons: action.payload.API_Pokemons,
// 		DB_Pokemons: action.payload.DB_Pokemons,
// 		Filtered: action.payload.DB_Pokemons.concat(
// 			action.payload.API_Pokemons
// 		),
// 		done: true,
// 	};
// case GET_POKEMON:
// 	console.log('Añadiendo Pokemon a Busqueda');
// 	console.log(action.payload);
// 	return {
// 		...state,
// 		Search: action.payload,
// 		done: true,
// 	};
