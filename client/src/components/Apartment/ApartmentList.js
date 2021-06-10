import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllApartments} from '../../redux/apartments/apartmentsActions';
import {DataGrid} from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './ApartmentList.css';

const ApartmentList = () => {
	const allApartments = useSelector(state => state.apartmentReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllApartments());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const columns = [
		{field: 'id', headerName: '#', width: 90},
		{field: 'firstName', headerName: 'Locatario', width: 150},
		{field: 'lastName', headerName: 'Contacto', width: 150},
		{field: 'estado', headerName: 'Estado', width: 150},
		{
			field: '',
			headerName: '',
			width: 110,
		},
	];

	const rows = [
		{id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, estado: 232323},
		{id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
		{id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
		{id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
		{id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
		{id: 6, lastName: 'Melisandre', firstName: null, age: 150},
		{id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
		{id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
		{id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
	];
	{
		/* <Link to={`/editApartment/${id}`}>
                <span>Edit</span>
    </Link> */
	}
	console.log('CONSOLE LOGGGGGG', allApartments);
	return (
		<div>
			<Link to="/apartmentadd" className='link'>
				<Button variant="contained" color="primary">Crear nuevo</Button>
			</Link>
			<div className="container">
				<div style={{height: 400, width: '100%'}}>
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={5}
						checkboxSelection
					/>
				</div>
			</div>
			<div>
				<ul className="genresList">
					{allApartments.allApartments?.map(apartment => (
						<li key={apartment.id}>{apartment.cata_apartment}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ApartmentList;
