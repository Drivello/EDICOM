import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { createAmenity } from '../../redux/amenities/amenitiesActions';
import {getBuildings} from '../../redux/building/buildingActions'
import swal from "sweetalert";
import CreateAmenityForm from './CreateAmenityForm';

const CreateAmenity = () => {
	
    const {allBuildings} = useSelector(state => state.buildingReducer);

	const dispatch = useDispatch();

	useEffect(() => {
        dispatch(getBuildings())
    },[dispatch])

	
	const [input, setInput] = useState({
		amenity_type: '',
		quantity:'',
		capacity: '',
		amenity_detail: '',
		building:''
	});

	const handleSubmit = e => {
		dispatch(createAmenity(input));
		swal('Amenity creado exitosamente', "Gracias!", "success");
		//this should redirect? where?
	};

	return (
		<>
			<CreateAmenityForm input={input} setInput={setInput} allBuildings={allBuildings} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateAmenity;
