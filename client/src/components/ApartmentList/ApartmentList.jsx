import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllApartments} from '../../redux/apartments/apartmentsActions';
import {getBuildingDetail} from '../../redux/building/buildingActions';
import {DataGrid} from '@material-ui/data-grid';
import {Button, Typography, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';

import './ApartmentList.css';

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
					<Link to={`/apartment/${params.id}`}>
						<Button onClick={() => alert(params.id)}>Editar</Button>
					</Link>
				);
			},
		},
	];

	return (
		<Container>
			<Container className="componentHeader ">
				<Typography variant="h2" className="componentHeading1">
					Departamentos {detailBuilding[0]?.name || ""}
				</Typography>
				<Link to="/apartmentadd" className="link">
					<Button variant="contained" color="primary">
						Nuevo Departamento
					</Button>
				</Link>
			</Container>

			<Container style={{height: 400, width: '80%'}}>
				<Container style={{display: 'flex', height: '100%'}}>
					<DataGrid rows={apartments} columns={columns} />
				</Container>
			</Container>
		</Container>
	);
};

export default ApartmentList;
