import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getBuildings} from '../../redux/building/buildingActions';
import Carousel from 'react-material-ui-carousel';
import BuildingsList from './BuildingsList';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const Home = (props) => {
	const buildings = useSelector(state => state.buildingReducer.allBuildings);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBuildings());
	},[])

	return (
		<div>
			<Carousel 
			NextIcon={<NavigateNextIcon/>}
    		PrevIcon={<NavigateBeforeIcon/>}
			>
			{
				buildings && buildings.map( (item, i) => <BuildingsList key={i} item={item} /> )
			}
			</Carousel>
		</div>
	);
};
export default Home;
