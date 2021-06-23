import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import Home from '../Home/Home.js';
import Form from '../Spending/Form';
import Board from '../Spending/Board';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Buildings from '../Buildings/Buildings';
import BuildingAdd from '../Buildings/BuildingAdd/BuildingAdd';
import BuildingDetail from '../Buildings/BuildingDetail/BuildingDetail';
import BuildingUpdate from '../Buildings/BuildingUpdate/BuildingUpdate.jsx';
import Sidebar from '../Sidebar/Sidebar';
import EditApartmentForm from '../Apartment/ApartmentUpdate/EditApartmentForm';
import Expenses from '../Expenses/Expenses';
import CreateApartment from '../Apartment/ApartmentAdd/CreateApartment';
import CreateUser from '../Users/UserAdd/CreateUser';
import UserList from '../Users/UserList/UserList';
import UserUpdate from '../Users/UserUpdate/UserUpdate';
import UserView from '../Users/UserView/UserView';
import Logging from '../Logging/Logging';
import Alerts from '../Alerts/AlertsList';
import AlertsUpdate from '../Alerts/AlertsUpdate';
import AlertsAdd from '../Alerts/AlertsAdd';
import ShowAmenities from '../Amenities/ShowAmenities';
import CreateAmenity from '../Amenities/CreateAmenity';
import UpdateAmenity from '../Amenities/UpdateAmenity';
import ResetPassword from '../Logging/resetPassword';


function AppPublic() {
	alert("app publiccccccc")
	return (
		<Container className="App">
			<CssBaseline />
			<h1>Hola</h1>
		</Container>
	);
}

export default AppPublic;
