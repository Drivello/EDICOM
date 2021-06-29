import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CreateUserForm from './CreateUserForm'
import {createUser} from '../../../redux/users/userActions'
import {getBuildings} from '../../../redux/building/buildingActions'
import { useHistory } from 'react-router-dom'

import swal from "sweetalert";

const CreateUser = () => {
	
    const {allBuildings} = useSelector(state => state.buildingReducer);

	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
        dispatch(getBuildings())
	}, [dispatch])
	
	const [error, setError] = useState({//Control the error red border of the inputs
		name: false,
		email: false,
		password: false,
		contact: false,
        isDeleted:false
    })

	
	const [input, setInput] = useState({
		name: '',
		email:'',
		password: '',
		contact: '',
        apartment:'',
        building:''
	});

	const handleSubmit = e => {
		if (input.name !== "" && input.password !== "" && input.email !== "" && input.contact !== "" && input.apartment !== "" && input.building !== "") {



			setError({
				name: false,
				email: false,
				password: false,
				contact: false,
				isDeleted: false,
				apartment: false,
				building: false,
			})
			let body = {
				name: input.name,
				email: input.email,
				password: input.password,
				contact: input.contact,
				isDeleted: input.isDeleted,
				apartment: input.apartment,
				building: input.building

			}
			dispatch(createUser(body));
			swal('Usuario creado exitosamente', "Gracias!", "success");
			//this should redirect? where? to /userDetail
			history.goBack()
			
		} else {
			if (input.name === "") setError({ ...error, name: true });
			if (input.email === "") setError({ ...error, email: true });
			if (input.password === "") setError({ ...error, password: true });
			if (input.contact === "") setError({ ...error, contact: true });
			if (input.apartment === "") setError({ ...error, apartment: true });
			if (input.building === "") setError({ ...error, building: true });
            swal("Debe completar todos los campos", "Por favor revise los datos!", "warning");
		 }
	};

	return (
		<>
			<CreateUserForm input={input} setInput={setInput} allBuildings={allBuildings} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateUser;
