import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CreateApartmentForm from './CreateApartmentForm'
import {createApartment} from '../../redux/apartments/apartmentsActions';
import {getBuildings} from '../../redux/building/buildingActions';

const allBuildings = [
	{
		id: 1,
		cata: 'PA35PU238ZA',
		floor: 'Gabi',
		apartments: '60',
		name: 'ElDiego10',
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
	{
		id: 7,
		cata: '25FK33',
		floor: '90',
		apartments: '360',
		name: 'Costa du pau',
		address: '300',
	},
];

const CreateApartment = () => {
	

	const {apartmentCreated} = useSelector(state => state);
	const dispatch = useDispatch();
	const [input, setInput] = useState({
		cata_apartment: '',
		number_apartment:'',
		mt2_apartment: '',
		commons_apartment: '',
		state_apartment: '0',
		building: '',
	});
	/* 	React.useEffect(() => {
		dispatch(getBuildings());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); */

	const handleSubmit = e => {
		//e.preventDefault();
        console.log(input);
		/* e.preventDefault();
		dispatch(createApartment(input));
		 */
	};

	return (
		<>
			<CreateApartmentForm input={input} setInput={setInput} allBuildings={allBuildings} handleSubmit={handleSubmit} />
		</>
	);
};

export default CreateApartment;
