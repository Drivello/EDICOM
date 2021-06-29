import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import CreateApartmentForm from './CreateApartmentForm'
import { createApartment } from '../../../redux/apartments/apartmentsActions';
import { getBuildings } from '../../../redux/building/buildingActions';
import swal from "sweetalert";


const CreateApartment = () => {

	const { allBuildings } = useSelector(state => state.buildingReducer);
	const {buildingId} = useParams()

	const dispatch = useDispatch();

	const history = useHistory();

	useEffect(() => {
		dispatch(getBuildings())
	}, [dispatch])


	const [input, setInput] = useState({
		cata_apartment: '',
		number_apartment: '',
		mt2: '',
		state: '0',
		building: buildingId,
	});
	const [error, setError] = useState({//Control the error red border of the inputs
		building: false,
        cata_apartment: false,
		mt2: false,
		number_apartment: false,
    })

	const handleSubmit = e => {

		if (Object.values(input).every(field => field !== '') && Object.values(error).every(value => value === false)) {
			swal('Departamento Agregado Exitosamente')
			dispatch(createApartment(input));
			history.goBack()
		} else {
			swal('DEBE COMPLETAR TODOS \n LOS CAMPOS CORRECTAMENTE','','error')
		}

	};

	return (
		<>
			<CreateApartmentForm input={input} setInput={setInput} error={error} setError={setError} allBuildings={allBuildings} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateApartment;
