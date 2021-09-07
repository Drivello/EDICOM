import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppGlobal from './AppGlobal'
import reportWebVitals from './reportWebVitals'; // ¿de que sirve? ¿Es necesario?
import {store} from './redux/indexStore';
import './index.css';
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
	<Provider store={store}>
		<div>
		<AppGlobal />
		</div>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

