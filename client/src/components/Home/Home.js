import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getBuildings} from '../../redux/building/buildingActions';
import Carousel from 'react-material-ui-carousel';
import BuildingsList from './BuildingsList';
import Alerts from './Alerts';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import './Home.css';

const Home = (props) => {
	const buildings = useSelector(state => state.buildingReducer.allBuildings);
	const dispatch = useDispatch();

	const tileData = [
		{
			building: "PatagoniaI",
			concept: 'COMUNICADO RESTRICCIONES COVID19',
		},
		{   
			building: "PatagoniaII",
			concept: 'PROBLEMAS EN SERVICIO INTERNET',
		},
		{   
			building: "PatagoniaIII",
			concept: 'FILTRACIÓN DE AGUA SECTOR COCHERAS',
		},
	];

	useEffect(() => {
		dispatch(getBuildings());
	},[])

	return (
		<div className='homeCont'>
			<div className='caruselCont'>
			<Carousel 
			NextIcon={<NavigateNextIcon/>}
    		PrevIcon={<NavigateBeforeIcon/>}
			>
			{
				buildings && buildings.map( (item, i) => <BuildingsList key={i} item={item} /> )
			}
			</Carousel>
			</div>
			<div className='alerts'>
				{
					tileData.map(e => <Alerts concept={e.concept} building={e.building}/>)
				}
			</div>

		</div>
	);
};
export default Home;
