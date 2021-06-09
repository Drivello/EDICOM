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
<<<<<<< HEAD
			<ApartmentList />
{/* 			<CreateApartmentForm /> */}
			<Sidebar></Sidebar>
=======
			<Carousel 
			NextIcon={<NavigateNextIcon/>}
    		PrevIcon={<NavigateBeforeIcon/>}
			>
			{
				buildings && buildings.map( (item, i) => <BuildingsList key={i} item={item} /> )
			}
			</Carousel>
>>>>>>> 1a9e486f2ae4f3ec32b666e97e7b833ef54e5c2d
		</div>
	);
};
export default Home;
