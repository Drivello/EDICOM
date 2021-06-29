import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom' 
import { Button, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../themeStyle';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import UserHome from "./UserHome/UserHome";
import UserComplaints from "./UserComplaints/UserComplaints";
import UserComplaintDetail from './UserComplaints/UserComplaintDetail';
import { getUser } from '../../../redux/users/userActions';
import { getApartmentById } from '../../../redux/apartments/apartmentsActions';
import { getComplaintsByUser } from '../../../redux/complaints/complaintsActions';

const UserView = (props) => {
    const userInfo = useSelector(state => state.loggingReducer.userId);
    const userDetail = useSelector(state => state.userReducer.userDetail);
    const apartmentDetail = useSelector(state => state.apartmentReducer.apartmentDetail);
    const userComplaints = useSelector(state => state.complaintsReducer.userComplaints);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(userInfo && userInfo.id) dispatch(getComplaintsByUser(userInfo.id))
    }, [userInfo]);

    useEffect(() => {
        if(userDetail && userDetail.apartmentId) dispatch(getApartmentById(userDetail.apartmentId))
    }, [userDetail] );
    
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
                    <Route exact path={`/public/:id/complaints`}>
                        <UserComplaints complaints={userComplaints && userComplaints} />
                    </Route>
                    <Route exact path={`/public/:id/complaints`}>
                        <UserComplaints complaints={userComplaints && userComplaints} />
                    </Route>
                    <Route
                        path='/public/:id/complaintDetail/:id'
                        render={({match}) => <UserComplaintDetail match={match} complaints={userComplaints && userComplaints} />}
                    />
                </Switch>
            </Container>
        </ThemeProvider>
    );
}

export default UserView;