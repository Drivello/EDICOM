import React, {useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { useSelector } from 'react-redux';
import App from './components/App/App.js';
import AppPublic from './components/App/AppPublic.js';
import Logging from './components/App/Logging.js';



const AppGlobal = () => {
	
	// const { authData } = useSelector(state => {
	// 	return {
	// 		authData: state.loggingReducer.authData,
	// 	};
	// });

	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('profile')));
	
	
	return (
		<BrowserRouter>

			{/* <Switch>  */}

				<Route 
					path="/logging"
					component={ (props) => (
						( !currentUser )
						? 
						( <Logging { ...props } /> )
						:
						(
							currentUser.name === "the admin" 
							?
							( <Redirect to="/" /> )
							:
							( <Redirect to="/public" /> )
						) 
					)}
				/>

				<Route 
					path="/public"
					component={ (props) => (
						( currentUser )
						? ( <AppPublic { ...props } /> )
						: ( <Redirect to="/logging" /> )
					)}
				/>

				<Route 
					 path="/"
					component={ (props) => (
						( (currentUser && currentUser.name === "the admin") )
						? ( <App { ...props } /> )
						: ( <Redirect to="/logging" /> )
					)}
				/>

				{/* <Route exact path="/" component={App} /> */}
			
			{/* </Switch> */}
			
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