import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getBuildingDetail} from '../../redux/building/buildingActions';
import {getAllAmenities} from '../../redux/amenities/amenitiesActions';
import {makeStyles, Grid, Button, Container} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import {DataGrid} from '@material-ui/data-grid';
import theme from '../themeStyle';
import {Link} from 'react-router-dom';

const ShowAmenities = () => {
	const {detailBuilding} = useSelector(state => state.buildingReducer);
	const {Amenities} = useSelector(state => state.amenitiesReducer);

	const dispatch = useDispatch();

	const {id_building} = useParams();

	const useStyles = makeStyles(theme => ({
		root: {
			marginTop: 100,
			marginBottom: 30,
			border: 5,
		},
	}));

	const classes = useStyles();

	const [building, setBuilding] = useState({});

	useEffect(() => {
		dispatch(getBuildingDetail(id_building));
		dispatch(getAllAmenities(id_building));
	}, [dispatch]);

	useEffect(() => {
        setBuilding(detailBuilding)
    }, [detailBuilding]);

	console.log(Amenities)

	const columns = [
		{field: 'id', headerName: '#', width: 90},
		{field: 'amenity_type', headerName: 'Tipo', width: 200},
		{field: 'quantity', headerName: 'Cantidad', width: 200},
		{field: 'capacity', headerName: 'Capacidad', width: 200},
		{
			field: 'amenity_detail',
			headerName: 'Detalles',
			sortable: false,
			width: 120,
			disableClickEventBubbling: true,
			renderCell: params => {
				return (
					<ThemeProvider theme={theme}>
						<Link to={`/amenities/detail/${params.id}`}>
							<Button
								style={{fontWeight: 1000}}
								variant="contained"
								color="secondary"
							>
								VER MAS
							</Button>
						</Link>
					</ThemeProvider>
				);
			},
		},
	];

	return (
		<>
			<ThemeProvider theme={theme}>
				<Grid
					container
					className={classes.root}
					direction="row"
					justify="center"
					alignItems="center"
				>
					<div className="extContAL">
						<div className="componentHeader">
							<h1>{building.name}</h1>
						</div>
						<Container style={{height: '400px', width: '900px'}}>
							<Container style={{display: 'flex', height: '100%', width:'900px'}}>
								<DataGrid rows={Amenities} columns={columns} style={{width:'800px'}}/>
							</Container>
						</Container>
					</div>
				</Grid>
			</ThemeProvider>
		</>
	);
};
export default ShowAmenities;
