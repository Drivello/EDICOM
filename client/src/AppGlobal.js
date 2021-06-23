import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import App from './components/App/App.js';
import AppPublic from './components/App/AppPublic.js';



const AppGlobal = () => {
	return (
		<BrowserRouter>
			<Route exact path="/" component={App} />
			<Route exact path="/public" component={AppPublic} />
		</BrowserRouter>
	)
}

export default AppGlobal

/*
Index
		AppGlobal
				App
						Componentes
				App public
						Componentes
*/