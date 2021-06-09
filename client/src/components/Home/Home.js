import React from 'react';
import ApartmentList from '../Apartment/ApartmentList';
import CreateApartmentForm from '../Apartment/CreateApartmentForm';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
	return (
		<div>
			<ApartmentList />
{/* 			<CreateApartmentForm /> */}
			<Sidebar></Sidebar>
		</div>
	);
};
export default Home;
