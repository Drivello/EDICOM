import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllApartments} from '../../redux/apartments/apartmentsActions';
import {getBuildingDetail} from '../../redux/building/buildingActions';
import {DataGrid} from '@material-ui/data-grid';
import {Button, Typography, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';

import './ApartmentList.css';
import { BorderAll } from '@material-ui/icons';

const ApartmentList = ({buildingId}) => {
	const allApartments = useSelector(state => state.apartmentReducer);
	const {detailBuilding} = useSelector(state => state.buildingReducer)
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(getAllApartments(buildingId));
		dispatch(getBuildingDetail(buildingId))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);
	
	const apartments = allApartments?.allApartments?.map(apartment => {
		return {
      id: apartment.id,
      cata_apartment: apartment.cata_apartment,
	  number_apartment: apartment.number_apartment,
	  mt2: apartment.mt2,
      state: apartment.state ? "Activo" : "Desocupado",
      edit: "editar",
    };
	});

	const columns = [
		{field: 'id', headerName: '#', width: 90},
		{field: 'cata_apartment', headerName: 'Un Catastral', width: 150},
		{field: 'number_apartment', headerName: 'N° Departamento', width: 150},
		{field: 'mt2', headerName: 'Mts2', width: 150},
		{field: 'state', headerName: 'Estado', width: 150},
		{
			field: 'Editar',
			headerName: 'EDITAR',
			sortable: false,
			width: 100,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
					<Link to={`/apartment/${params.id}`} >
						<Button style={{fontWeight: 1000}} variant="contained" color="secondary" onClick={() => alert(params.id)}>Editar</Button>
					</Link>
					</ThemeProvider>
				);
			},
		},
	];

	return (
		<ThemeProvider theme={theme}>
		<div className='extContAL'>
			<div className="componentHeader">
				<h1>
					Departamentos {detailBuilding[0]?.name || ""}
				</h1>
				<Link to="/apartmentadd" className="link">
					<Button variant="contained" color="secondary" style={{fontWeight: 1000}}>
						Nuevo Departamento
					</Button>
				</Link>
			</div>
			<Container style={{height: 400, width: '80%'}}>
				<Container style={{display: 'flex', height: '100%'}}>
					<DataGrid style={{border: " 4px solid black"}}rows={apartments} columns={columns} />
				</Container>
			</Container>
		</div>
		</ThemeProvider>
	);
};

export default ApartmentList;
