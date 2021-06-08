import React from 'react';
import ApartmentList from '../Apartment/ApartmentList';
import CreateApartmentForm from '../Apartment/CreateApartmentForm';

const Home = () => {
	return (
		<div>
			<ApartmentList />
			<CreateApartmentForm />
		</div>
	);
};
export default Home;
