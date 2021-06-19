import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'
import CreateApartmentForm from './CreateApartmentForm'
import {createApartment} from '../../../redux/apartments/apartmentsActions';
import {getBuildings} from '../../../redux/building/buildingActions';

const CreateApartment = () => {

	const { allBuildings } = useSelector( state => state.buildingReducer);
	
	const dispatch = useDispatch();

	const history = useHistory();

	useEffect(() => {
        dispatch(getBuildings())
    },[dispatch])

	
	const [input, setInput] = useState({
		cata_apartment: '',
		number_apartment:'',
		mt2: '',
		state: '0',
		building: '',
	});

	const handleSubmit = e => {
		dispatch(createApartment(input));
		alert('Departamento Agregado Exitosamente')
		history.goBack()
	};

	return (
		<>
			<CreateApartmentForm input={input} setInput={setInput} allBuildings={allBuildings} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateApartment;
