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
import BuildingDetail from '../BuildingDetail/BuildingDetail'
import BuildingUpdate  from '../BuildingUpdate/BuildingUpdate.jsx';
import Sidebar from '../Sidebar/Sidebar';
import EditApartmentForm from '../ApartmentUpdate/EditApartmentForm'
import Expenses from '../Expenses/Expenses'
import CreateApartment from '../ApartmentAdd/CreateApartment';
import Alerts from '../Alerts/AlertsList';
import AlertsUpdate from '../AlertsUpdate/AlertsUpdate';
import AlertsAdd from '../AlertsAdd/AlertsAdd';


function App() {
  return (
    <Container className="App">
      <CssBaseline />
      <BrowserRouter>
        <Route path="/" component = {Sidebar}/>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/buildings" component = {Buildings}/>
        <Route exact path="/buildingadd" component = {BuildingAdd}/>
        <Route exact path="/buildingDetail/:id" component = {BuildingDetail}/>
        <Route exact path="/BuildingUpdate/:id" component = {BuildingUpdate}/> 
        <Route exact path="/apartmentadd" component={CreateApartment} />
				<Route exact path="/apartment/:id" component={EditApartmentForm} />
        <Route exact path="/alerts" component = {Alerts}/>
        <Route exact path="/alertsUpdate/:id" component = {AlertsUpdate}/>
        <Route exact path="/alertsAdd" component = {AlertsAdd}/>
        <Route exact path="/spendings/newSpending" component = {SpendingForm}/>
        <Route exact path="/spendings/board" component = {SpendingBoard}/>
        <Route exact path="/ExpensesTable" component = {Expenses}/>
        <Route path="/spendings/board/:id/edit" render = {({match}) => <SpendingForm match={match}/>}/>
      </BrowserRouter>
    </Container>
  );

}

export default App;
