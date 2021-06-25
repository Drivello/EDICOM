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
import RegisterAdmin from "../Admin/RegisterAdmin";



function App() {
	return (
		<Container className="App">
			<CssBaseline />
			<BrowserRouter>

				{/* ----------------------------Alertas----------------------------------- */}
				<Route exact path="/alerts" component={Alerts} />
				<Route exact path="/alertsAdd" component={AlertsAdd} />
				<Route exact path="/alertsUpdate/:id" component={AlertsUpdate} />

				{/* ----------------------------amenities----------------------------------- */}
				<Route path="/amenityCreate" component={CreateAmenity} />
				<Route path="/amenities/" component={ShowAmenities} />
				<Route path="/amenities/:id_building" component={ShowAmenities} />
				<Route path="/amenityUpdate/:id" component={UpdateAmenity} />

				{/* ----------------------------apartments----------------------------------- */}
				<Route path="/apartmentadd" component={CreateApartment} />
				<Route path="/apartment/:id" component={EditApartmentForm} />


				{/* ----------------------------buildings----------------------------------- */}
				<Route exact path="/buildings" component={Buildings} />
				<Route exact path="/buildingadd" component={BuildingAdd} />
				<Route exact path="/buildingDetail/:id" component={BuildingDetail} />
				<Route exact path="/BuildingUpdate/:id" component={BuildingUpdate} />

				{/* ----------------------------Logging----------------------------------- */}
				{/* <Route exact path="/logging" component={Logging} /> */}
				


				{/* ----------------------------Spendings&Expenses----------------------------------- */}
				<Route exact path="/spendings/board" component={Board} />
				<Route exact path="/ExpensesTable" component={Expenses} />
				<Route exact path="/spendings/newSpending" component={Form} />
				<Route path="/spendings/board/:id/edit" render={({match}) => <Form match={match} />}/>

				{/* ----------------------------User----------------------------------- */}
				<Route path="/userCreate" component={CreateUser} />
				<Route path="/userDetail" component={UserList} />
				<Route path="/userUpdate/:id" component={UserUpdate} />
				<Route path="/userView/:id" component={UserView} />
				

				{/* ----------------------------Generales----------------------------------- */}
				<Route exact path="/" component={Home} />
				<Route path="/" component={Sidebar} />
				<Route path="/registerAdmin" component={RegisterAdmin} />	
				
			</BrowserRouter>
		</Container>
	);
}

export default App;
