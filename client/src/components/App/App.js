import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import Home from '../Home/Home.js';
import SpendingForm from '../spending/Form';
import SpendingBoard from '../spending/Board';
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
import UserUpdate from '../UserUpdate/UserUpdate'

function App() {
	return (
		<Container className="App">
			<CssBaseline />
			<BrowserRouter>
				<Route path="/" component={Sidebar} />
				<Route exact path="/" component={Home} />
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
			</BrowserRouter>
		</Container>
	);
}

export default App;
