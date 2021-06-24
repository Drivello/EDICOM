import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Header } from '../HomeTenant/Header';
import Sidebar from '../Sidebar/Sidebar';
import CalendarUser from '../Users/UserView/Alerts/CalendarUser';
import AlertsUser from '../Users/UserView/Alerts/AlertsUser';
import Subscriptions from '../Users/UserView/Alerts/Subscriptions';

function AppPublic() {
	return (
		<Container className="App">
			<CssBaseline />
				<BrowserRouter>
					<Route path="/public" component={Sidebar} />
					<Route exact path="/public/:id/alerts" component={AlertsUser}/>
					<Route exact path="/public/:id/calendar" component={CalendarUser}/>
					<Route exact path="/public/:id/subscriptions" component={Subscriptions}/>
				</BrowserRouter>
		</Container>
	);
}

export default AppPublic;
