import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createAmenity} from '../../redux/amenities/amenitiesActions';
import {getAllAmenities, allAmenities} from '../../redux/amenities/amenitiesActions';

import {getBuildings} from '../../redux/building/buildingActions';
import swal from 'sweetalert';
import CreateAmenityForm from './CreateAmenityForm';
import { useHistory } from 'react-router-dom';

const CreateAmenity = () => {
	const {allBuildings} = useSelector(state => state.buildingReducer);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		dispatch(getBuildings());
	}, [dispatch]);

	const [input, setInput] = useState({
		amenity_type: '',
		quantity: '',
		capacity: '',
		amenity_detail: '',
		building: '',
	});

	const handleSubmit = e => {
		if (
			input.amenity_type !== '' &&
			input.quantity !== '' &&
			input.capacity !== '' &&
			input.building !== ''
		) {
			dispatch(createAmenity(input))
			.then(() => history.push('/amenities/'))
			swal('Amenity creado exitosamente', 'Gracias!', 'success');
			setInput({
				amenity_type: '',
				quantity: '',
				capacity: '',
				amenity_detail: '',
				building: '',
			})
			//this should redirect? where?
			// dispatch(allAmenities())
			
		} else {
			swal('Debe llenar todos los campos', 'Por favor reviselos!', 'warning');
		}
	};

	return (
		<>
			<CreateAmenityForm
				input={input}
				setInput={setInput}
				allBuildings={allBuildings}
				handleSubmit={handleSubmit}
			/>
		</>
	);
};

export default CreateAmenity;
