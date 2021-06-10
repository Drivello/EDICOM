import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

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
	/**************** */
	{
		/* <select defaultValue={'default'} onChange={(e) => handleSelectChange(e.target.value)}>
                    <option key={1234} value={'default'}>All Genre</option>
            {genresLoaded?.map((item, i) => {
              return (
                    <option key={i} value={item.id}>{item.name}</option>
              )})}
            </select> */
	}
	return (
		<>
			<h1>Desde ApartmentForm</h1>
			<form>
				<select>
					<option value="" key="">
						Select building
					</option>
					{allBuildings?.map((building, idx) => {
						return (
							<option value={building.id} key={idx}>
								{building.name}
							</option>
						);
					})}
				</select>
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
