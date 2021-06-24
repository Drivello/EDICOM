import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Header } from '../HomeTenant/Header';
import Sidebar from '../Sidebar/Sidebar';


function AppPublic() {
	return (
		<Container className="App">
			<CssBaseline />
				<BrowserRouter>

					//Poner acá los route con los componentes de la vista del locatario
					<Route path="/public" component={Sidebar} />

				</BrowserRouter>
		</Container>
	);
}

export default AppPublic;
