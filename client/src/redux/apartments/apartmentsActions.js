import axios from 'axios';

export const Actions = {
	CREATE_APARTMENT: 'createApartment',
	ALL_APARTMENTS: 'allApartments',
};
//let todoId = 1
//Importar constantes para evitar errores de tipeo
//
export function createApartment(apartment) {
	return async function (dispatch) {
		const {data} = await axios.post(
			`http://localhost:3001/apartments/`,
			apartment
		);
		console.log('createApartment', data);
		dispatch({type: Actions.CREATE_APARTMENT, payload: data});
	};
}
export function getAllApartments() {
	return async function (dispatch) {
		const {data} = await axios.get(`http://localhost:3001/apartments/`);
		console.log('All Apartments', data);
		dispatch({type: Actions.ALL_APARTMENTS, payload: data});
	};
}

export function editApartment(apartment) {
	return async function (dispatch) {
		const {data} = await axios.put(`http://localhost:3001/apartments/`);
		console.log('All Apartments', data);
		dispatch({type: Actions.ALL_APARTMENTS, payload: data});
	};

	/*   export function getVideogames(name) {
    return async function(dispatch) {
        const  { data }  = await axios.get(`${GAMES_URL}?key=${API_KEY}&search=${name}`)
        console.log("is this even happening?",data.dataSet)
        dispatch({ type: Actions.GET_VIDEOGAMES, payload: data.dataSet })
    };
  }
  export function getGenres() {
    return async function(dispatch) {
        const  { data }  = await axios.get(`${GENRES_URL}?key=${API_KEY}`)
        console.log("is this even happening?",data.dataSet)
        dispatch({ type: Actions.GET_GENRES, payload: data })
    };
  }
  export function getVideogamesByID(id) {
    return async function(dispatch) {
        const  { data }  = await axios.get(`${GAMES_URL}/${id}`)
        console.log("getVideogamesByID",data)
    dispatch({ type: Actions.GET_VIDEOGAMES_BY_ID, payload: data })*/
}
