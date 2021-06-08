import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllApartments} from '../../redux/apartments/apartmentsActions';

const ApartmentList = () => {
	const {allApartments} = useSelector(state => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllApartments());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [allApartments]);

	return (
		<>
			<h1>Aca vamos a probar recibir los estados globales de redux</h1>
		</>
	);
};

export default ApartmentList;
