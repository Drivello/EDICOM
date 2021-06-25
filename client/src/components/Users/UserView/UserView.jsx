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
    const [userInfo, setUserInfo] = useState('');
    const currentUser = useSelector(state => state.loggingReducer.userId)
    useEffect(() => {
        setUserInfo(currentUser);
    }, [currentUser])
    const dispatch = useDispatch();
    return (
        <ThemeProvider theme={theme}>
            <Container style={{display: "flex", flexDirection: "column", justifyContent: "center",  marginLeft: "35px"}}>
                <div className="componentHeader">
                    <h1>Info Departamento</h1>
                </div>
                <Switch>
                    <Route exact path={`/public/:id`}>
                        <UserHome />
                    </Route>
                    <Route  path={`/public/:id/complaints`}>
                        <UserComplaints />
                    </Route>
                </Switch>
            </Container>
        </ThemeProvider>
    );
}

export default UserView;