import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CreateUserForm from './CreateUserForm'
import {createUser} from '../../../redux/users/userActions'
import {getBuildings} from '../../../redux/building/buildingActions'
import swal from "sweetalert";

const CreateUser = () => {
	
    const {allBuildings} = useSelector(state => state.buildingReducer);

	const dispatch = useDispatch();

	useEffect(() => {
        dispatch(getBuildings())
    },[dispatch])

	
	const [input, setInput] = useState({
		name: '',
		email:'',
		password: '',
		contact: '',
        apartment:'',
        building:''
	});

	const handleSubmit = e => {
		dispatch(createUser(input));
		swal('Usuario creado exitosamente', "Gracias!", "success");
		//this should redirect? where?
	};

	return (
		<>
			<CreateUserForm input={input} setInput={setInput} allBuildings={allBuildings} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateUser;
