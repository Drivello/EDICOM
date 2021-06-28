import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Header } from '../HomeTenant/Header';
import Sidebar from '../Sidebar/Sidebar';
import Bookings from '../Users/UserView/Bookings/Bookings';
import SidebarUsers from '../SidebarUsers/SidebarUsers';
import UserView from '../Users/UserView/UserView';
import CalendarUser from '../Users/UserView/Alerts/CalendarUser';
import ApartmentBoard from '../Spending/apartmentBoard'
import AlertsUser from '../Users/UserView/Alerts/AlertsUser';
import Subscriptions from '../Users/UserView/Alerts/Subscriptions';
import SearchBar from '../Services/SearchBar';
import ServiceContainer from '../Services/ServiceContainer';
import UserExpenses from '../Expenses/UserExpenses';


function AppPublic() {
	return (
		<Container className="App">
			<CssBaseline />
			<BrowserRouter>
				//Poner acá los route con los componentes de la vista del locatario		
				<Route path="/public/Bookings" component={Bookings} />
				<Route exact path="/public/spendings/board" component={ApartmentBoard} />
				<Route path="/public" component={SidebarUsers} />
				{/* <Route path="/public" component={UserView} /> */}
				<Route exact path="/public/:id/alerts" component={AlertsUser}/>
				<Route exact path="/public/:id/calendar" component={CalendarUser}/>
				<Route exact path="/public/:id/subscriptions" component={Subscriptions}/>
				<Route exact path="/public/services" component={SearchBar}/>
				<Route exact path="/public/contservices/:id" component={ServiceContainer}/>
				<Route exact path="/public/expenses/:apartmentNumber" component={UserExpenses}/>
			</BrowserRouter>
		</Container>
	);
}

export default AppPublic;