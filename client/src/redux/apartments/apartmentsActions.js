import axios from 'axios';

export const Actions = {
	CREATE_APARTMENT: 'createApartment',
	ALL_APARTMENTS: 'allApartments',
  GET_APARTMENT: 'getApartment'
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
export function getApartmentById(id) {
  return async function (dispatch) {
    const {data} = await axios.get(`http://localhost:3001/apartments/${id}`)
    console.log("Get Apartment ", id);
    dispatch({ type: Actions.GET_APARTMENT, payload: data});
  }
}
export function updateApartment(id,data){
  return function (dispatch) {
    return axios({
      method: 'post',
      url: `http://localhost:3001/apartments/${id}`,
      data,
    })
    .then(response => {
      dispatch({type: Actions.GET_APARTMENT, payload: data})
    })
    .catch(error => alert(error))
  }
}
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
        dispatch({ type: Actions.GET_VIDEOGAMES_BY_ID, payload: data })
    };
  } */
