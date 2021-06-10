import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllApartments} from '../../redux/apartments/apartmentsActions';
import {DataGrid} from '@material-ui/data-grid';
import './ApartmentList.css';
import {Link} from 'react-router-dom';

const ApartmentList = () => {
	const allApartments = useSelector(state => state.apartmentReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllApartments());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const apartments = allApartments.allApartments.map(apartment => {
		return {
			id: apartment.id,
			owner: apartment.owner,
			contact: apartment.contact,
			state: apartment.state ? 'Activo' : 'Desocupado',
			edit: 'editar',
		};
	});
	// const editButton = (
	// 	<Link to={`/editApartment/${id}`}>
	// 		<span>Edit</span>
	// 	</Link>
	// );

	const columns = [
		{field: 'id', headerName: '#', width: 90},
		{field: 'owner', headerName: 'Locatario', width: 150},
		{field: 'contact', headerName: 'Contacto', width: 150},
		{field: 'state', headerName: 'Estado', width: 150},
		{
			field: 'edit',
			headerName: 'Editar',
			width: 110,
		},
	];

	return (
		<div style={{height: 400, width: '100%'}}>
			<div style={{display: 'flex', height: '100%'}}>
				<DataGrid rows={apartments} columns={columns} pageSize={5} />
			</div>
		</div>
	);
};

export default ApartmentList;
