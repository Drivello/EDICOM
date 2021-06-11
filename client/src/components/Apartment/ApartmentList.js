import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllApartments} from '../../redux/apartments/apartmentsActions';
import {DataGrid} from '@material-ui/data-grid';
import {Button, Typography, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';

import './ApartmentList.css';

const ApartmentList = () => {
	const allApartments = useSelector(state => state.apartmentReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllApartments());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	const apartments = allApartments.allApartments.map(apartment => {
		return {
			id: apartment.id,
			owner: apartment.owner,
			contact: apartment.contact,
			state: apartment.state ? 'Activo' : 'Desocupado',
			edit: 'editar',
		};
	});

	const columns = [
		{field: 'id', headerName: '#', width: 90},
		{field: 'owner', headerName: 'Locatario', width: 150},
		{field: 'contact', headerName: 'Contacto', width: 150},
		{field: 'state', headerName: 'Estado', width: 150},
		{
			field: 'Editar',
			headerName: 'EDITAR',
			sortable: false,
			width: 100,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<Link to={`/editApartment/${params.id}}`}>
						<Button onClick={() => alert(params.id)}>Editar</Button>
					</Link>
				);
			},
		},
	];

	return (
		<Container>
			<Container className="componentHeader">
				<Typography variant="h2" className="componentHeading1">
					Detalle del departamento
				</Typography>
				<Link to="/apartmentadd" className="link">
					<Button variant="contained" color="primary">
						Nuevo Departamento
					</Button>
				</Link>
			</Container>

			<Container style={{height: 400, width: '60%'}}>
				<Container style={{display: 'flex', height: '100%'}}>
					<DataGrid rows={apartments} columns={columns} />
				</Container>
			</Container>
		</Container>
	);
};

export default ApartmentList;
