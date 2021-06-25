import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Header} from '../HomeTenant/Header';
import Sidebar from '../Sidebar/Sidebar';
<<<<<<< HEAD
import Bookings from '../Users/UserView/Bookings/Bookings';
=======
import CalendarUser from '../Users/UserView/Alerts/CalendarUser';
import AlertsUser from '../Users/UserView/Alerts/AlertsUser';
import Subscriptions from '../Users/UserView/Alerts/Subscriptions';
>>>>>>> cd9eb415b52b42729d0486adfe8102832f8f2d0c

function AppPublic() {
	return (
		<Container className="App">
			<CssBaseline />
<<<<<<< HEAD
			<BrowserRouter>
				//Poner acá los route con los componentes de la vista del locatario
				<Route path="/public" component={Sidebar} />
				<Route path="/public/Bookings" component={Bookings} />
			</BrowserRouter>
=======
				<BrowserRouter>
					<Route path="/public" component={Sidebar} />
					<Route exact path="/public/:id/alerts" component={AlertsUser}/>
					<Route exact path="/public/:id/calendar" component={CalendarUser}/>
					<Route exact path="/public/:id/subscriptions" component={Subscriptions}/>
				</BrowserRouter>
>>>>>>> cd9eb415b52b42729d0486adfe8102832f8f2d0c
		</Container>
	);
}

export default AppPublic;
