import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBuildings } from '../../redux/building/buildingActions';
import { getAlerts } from '../../redux/alerts/alertActions';
import { totalSpending } from '../../redux/spending/actionSpending'; //prueba Marian
import { Grid } from '@material-ui/core';
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import Carousel from 'react-material-ui-carousel';
import BuildingsList from './BuildingsList';
import Alerts from './Alerts';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import './Home.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';

const Home = (props) => {
	const buildings = useSelector(state => state.buildingReducer.allBuildings);
	const alerts = useSelector(state => state.alertsReducer.allAlerts);
	const spends = useSelector(state => state.reducerSpending.totalSpending); //prueba marian
	const [activeBuilding, SetactiveBuilding] = useState(null);
	const dispatch = useDispatch();
	const today = new Date();


	useEffect(() => {
		dispatch(getBuildings());
		dispatch(getAlerts());
	},[dispatch])

	console.log("state.reducerSpending.totalSpending") //prueba marian
	console.log(spends) //prueba marian

	return (
		<ThemeProvider theme={theme}>
		<Grid className='homeCont'>
			<h1 className='title'>Mis Edificios</h1>
			<Grid className='caruselCont'>
			<Carousel 
			NextIcon={<NavigateNextIcon/>}
    		PrevIcon={<NavigateBeforeIcon/>}
			>
			{
				buildings && buildings.map( (building, i) => <BuildingsList style={{backgroundColor: "#212121"}} key={i} item={building} /> )
			}
			</Carousel>
			<MapContainer className='map' center={[-31.426780,-64.190910]} zoom={12}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			```{
					buildings && buildings.map((building, i) => <Marker key={i} position={[(building.latitude || -31.426780), (building.longitude || -64.190910)]}>
						<Popup>
							<h3>{building.name}</h3>
						</Popup>
					</Marker>
					)
				}
			</MapContainer>
			</Grid>
			<h1 className='title'>Mis Alertas</h1>
			<Grid className='alerts'>
				{
					alerts.filter(alert => new Date(alert.date).getMonth() === today.getMonth()).map(alert => <Alerts concept={alert.concept} building={alert.building.name}/>)
				}
			</Grid>
		</Grid>
		</ThemeProvider>
	);
};
export default Home;
