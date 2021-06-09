import {BrowserRouter, Route} from 'react-router-dom';
import CreateApartmentForm from './components/Apartment/CreateApartmentForm';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path="/" component={CreateApartmentForm} />
			</BrowserRouter>
		</div>
	);
}

export default App;
