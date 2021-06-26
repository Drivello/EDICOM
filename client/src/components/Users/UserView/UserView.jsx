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
import { getApartmentById } from '../../../redux/apartments/apartmentsActions';


const UserView = (props) => {
    const [userInfo, setUserInfo] = useState('');
    const currentUser = useSelector(state => state.loggingReducer.userId);
    const userDetail = useSelector(state => state.userReducer.userDetail);
    const apartmentDetail = useSelector(state => state.apartmentReducer.apartmentDetail);

    useEffect(() => {
        setUserInfo(currentUser);
    }, [currentUser])
    useEffect(() => {
        dispatch(getUser(currentUser && currentUser.id));
    }, [userInfo])
    useEffect(() => {
        dispatch(getApartmentById(userDetail && userDetail.apartmentId))
    }, [userDetail])

    const dispatch = useDispatch();
    return (
        <ThemeProvider theme={theme}>
            <Container style={{display: "flex", flexDirection: "column", justifyContent: "center",  marginLeft: "35px"}}>
                <div className="componentHeader">
                    <div className="apartmentHeading">
                        <h1>{apartmentDetail && apartmentDetail.number_apartment}</h1>
                        <ul>
                            <li>Nº Catastral: {apartmentDetail && apartmentDetail.cata_apartment}</li>
                            <li>Superficie: {apartmentDetail && apartmentDetail.mt2} m2</li>
                        </ul>
                    </div>
                </div>
                <Switch>
                    <Route exact path={`/public/:id`}>
                        <UserHome user={userDetail && userDetail} />
                    </Route>
                    <Route  path={`/public/:id/complaints`}>
                        <UserComplaints user={userDetail && userDetail} apartment={apartmentDetail && apartmentDetail} />
                    </Route>
                </Switch>
            </Container>
        </ThemeProvider>
    );
}

export default UserView;