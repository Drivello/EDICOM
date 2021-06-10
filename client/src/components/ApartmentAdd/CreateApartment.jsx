import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CreateApartmentForm from './CreateApartmentForm'
import {createApartment} from '../../redux/apartments/apartmentsActions';
import {getBuildings} from '../../redux/building/buildingActions';

const allBuildings = [
	{
		id: 1,
		cata: 'A23FKJ238',
		floor: 'Gabi',
		apartments: '60',
		name: '10',
		address: '3000',
	},
	{
		id: 6,
		cata: '23FK38',
		floor: 'Gbi',
		apartments: '60',
		name: 'ASDASD',
		address: '300',
	},
];

const CreateApartment = () => {
	const [input, setInput] = useState({
		cata_apartment: '',
		owner: '',
		mt2: '',
		commons: '',
		expense: '',
		state: '',
		building: '',
	});
	const {apartmentCreated} = useSelector(
		//, allBuildings
		//,  for the
		state => state
	);
	const dispatch = useDispatch();

	/* 	React.useEffect(() => {
		dispatch(getBuildings());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); */

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
	
	return (
		<>
			<CreateApartmentForm allBuildings={allBuildings} handleSubmit={handleSubmit} handleInputChange={handleInputChange} input={input}/>
		</>
	);
};

export default CreateApartment;
