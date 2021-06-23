import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom' 
import { Button, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../themeStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserHome from "./UserHome/UserHome";
import UserComplaints from "./UserComplaints/UserComplaints";
import { getUser } from '../../../redux/users/userActions';


const UserView = (props) => {
    const currentUser = useSelector(state => state.userReducer.userDetail)
    console.log(currentUser)
    const dispatch = useDispatch();
    return (
        <ThemeProvider theme={theme}>
            <Container style={{display: "flex", flexDirection: "column", justifyContent: "center",  marginLeft: "35px"}}>
                <div className="componentHeader">
                    <h1>Info Departamento</h1>
                </div>
                <Switch>
                    <Route  path={`/userView/1/home`}>
                        <UserHome userId={currentUser.id} />
                    </Route>
                    <Route  path={`/userView/1/complaints`}>
                        <UserComplaints userId={currentUser.id} />
                    </Route>
                </Switch>
            </Container>
        </ThemeProvider>
    );
}

export default UserView;