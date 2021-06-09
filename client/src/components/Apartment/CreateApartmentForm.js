import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {createApartment} from '../../redux/apartments/apartmentsActions';

const CreateApartmentForm = () => {
	const [input, setInput] = useState({
		cata_apartment: '',
		owner: '',
		mt2: '',
		commons: '',
		expense: '',
		state: '',
		building: '',
	});
	const {apartmentCreated} = useSelector(state => state);
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(createApartment(input));
		console.log(input);
	};
	/******************* */
	const handleInputChange = function (e) {
		//  console.log(input.releaseDate)
		setInput({
			...input,
			[e.target.name]: e.target.value, // This shit doesnt work for asynchronous reasons see ES6
		});
	};
	/**************** */

	return (
		<>
			<h1>Desde ApartmentForm</h1>
			<form>
				<input
					type="text"
					name="cata_apartment"
					value={input.cata_apartment}
					onChange={handleInputChange}
				/>{' '}
				cata_apartment
				<input
					type="text"
					name="owner"
					value={input.owner}
					onChange={handleInputChange}
				/>{' '}
				owner
				<input
					type="text"
					name="mt2"
					value={input.mt2}
					onChange={handleInputChange}
				/>{' '}
				mt2
				<input
					type="text"
					name="commons"
					value={input.commons}
					onChange={handleInputChange}
				/>{' '}
				commons
				<input
					type="text"
					name="expense"
					value={input.expense}
					onChange={handleInputChange}
				/>{' '}
				expense
				<input
					type="text"
					name="state"
					value={input.state}
					onChange={handleInputChange}
				/>{' '}
				state
				<input
					type="text"
					name="building"
					value={input.building}
					onChange={handleInputChange}
				/>{' '}
				building
				<input type="button" value="CREAR" onClick={handleSubmit} />
			</form>
		</>
	);
};

export default CreateApartmentForm;
