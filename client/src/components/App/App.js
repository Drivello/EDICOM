import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import Home from '../Home/Home.js';
import SpendingForm from '../Spending/Form';
import SpendingBoard from '../Spending/Board';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Buildings from '../Buildings/Buildings';
import BuildingAdd from '../BuildingAdd/BuildingAdd';
import BuildingDetail from '../BuildingDetail/BuildingDetail';
import BuildingUpdate from '../BuildingUpdate/BuildingUpdate.jsx';
import Sidebar from '../Sidebar/Sidebar';
import EditApartmentForm from '../ApartmentUpdate/EditApartmentForm';
import Expenses from '../Expenses/Expenses';
import CreateApartment from '../ApartmentAdd/CreateApartment';
import CreateUser from '../UserAdd/CreateUser';
import UserList from '../UserList/UserList';
import UserUpdate from '../UserUpdate/UserUpdate';
import UserView from '../UserView/UserView';
import ExpensesTable from '../Expenses/Expenses';
import Logging from '../Logging/Logging';
import Alerts from '../Alerts/AlertsList';
import AlertsUpdate from '../AlertsUpdate/AlertsUpdate';
import AlertsAdd from '../AlertsAdd/AlertsAdd';
import ShowAmenities from '../Amenities/ShowAmenities';
import CreateAmenity from '../Amenities/CreateAmenity';
import UpdateAmenity from '../Amenities/UpdateAmenity';
import resetPassword from '../Logging/resetPassword';


function App() {
	return (
		<Container className="App">
			<CssBaseline />
			<BrowserRouter>
				<Route path="/" component={Sidebar} />
				<Route exact path="/" component={Home} />
				<Route exact path="/logging" component={Logging} />
				<Route exact path="/alerts" component={Alerts} />
				<Route exact path="/alertsUpdate/:id" component={AlertsUpdate} />
				<Route exact path="/alertsAdd" component={AlertsAdd} />
				<Route exact path="/logging/restaurarcontraseña" component = {resetPassword}/>
				<Route exact path="/buildings" component={Buildings} />
				<Route exact path="/buildingadd" component={BuildingAdd} />
				<Route exact path="/buildingDetail/:id" component={BuildingDetail} />
				<Route exact path="/BuildingUpdate/:id" component={BuildingUpdate} />
				<Route path="/apartmentadd" component={CreateApartment} />
				<Route path="/apartment/:id" component={EditApartmentForm} />
				<Route exact path="/spendings/newSpending" component={SpendingForm} />
				<Route exact path="/spendings/board" component={SpendingBoard} />
				<Route exact path="/ExpensesTable" component={Expenses} />
				<Route
					path="/spendings/board/:id/edit"
					render={({match}) => <SpendingForm match={match} />}
				/>
				<Route path="/userCreate" component={CreateUser} />
				<Route path="/userDetail" component={UserList} />
				<Route path="/userUpdate/:id" component={UserUpdate} />
				<Route path="/userView" component={UserView} />
				<Route path="/amenities/:id_building" component={ShowAmenities} />
				<Route path="/amenityCreate" component={CreateAmenity} />
				<Route path="/amenityUpdate/:id" component={UpdateAmenity} />
			</BrowserRouter>
		</Container>
	);
}

export default App;
