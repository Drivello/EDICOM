import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import  Home  from '../Home/Home.js';
import Form from '../spending/Form';
import Board from '../spending/Board';
import CreateApartmentForm from '../Apartment/CreateApartmentForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/container';
import Buildings from '../Buildings/Buildings';
import BuildingAdd from '../BuildingAdd/BuildingAdd';
import BuildingUpdate  from '../BuildingUpdate/BuildingUpdate.jsx';
import BuildindDetail from '../BuildingDetail/BuildingDetail';
import Sidebar from '../Sidebar/Sidebar';
import EditApartmentForm from '../Apartment/EditApartmentForm'
import BuildingDetail from '../BuildingDetail/BuildingDetail';



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
        <Route exact path="/create" component={CreateApartmentForm} />
        <Route exact path="/newSpending" component = {Form}/>
        <Route exact path="/board" component = {Board}/>
        <Route exact path="/board/:id/edit" render = {({match}) => <Form match={match}/>}/>
      </BrowserRouter>
    </Container>
  );
}

export default App;