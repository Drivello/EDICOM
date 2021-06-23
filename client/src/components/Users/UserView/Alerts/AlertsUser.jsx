import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { findAlertsBuilding } from '../../../../redux/alerts/alertActions';
import {getUser} from '../../../../redux/users/userActions';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import {Button} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Card from './Card';
import theme from '../../../themeStyle';
import './AlertsUser.css';

export default function AlertsUser(props){
    const id = props.match.params.id;
    const user_detail = useSelector(state => state.userReducer.userDetail);
    const alerts_building = useSelector(state => state.alertsReducer.findAlertsBuilding);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [alertsPerPage] = useState(4);
    const indexOfLast = currentPage * alertsPerPage;
    const indexOfFirst = indexOfLast - alertsPerPage;
    const current = alerts_building.filter(e => new Date(e.date).getFullYear() === new Date().getFullYear()).slice(indexOfFirst,indexOfLast);

    const handleNext = () => {
        if(indexOfLast <= alerts_building.length -1)  setCurrentPage(currentPage + 1)
    }
    const handlePreviuos = () => {
        if(indexOfFirst > 1)  setCurrentPage(currentPage - 1)
    }

    useEffect(() => {
        dispatch(getUser(id))
    }, [dispatch])

    useEffect(() => {
        user_detail && dispatch(findAlertsBuilding(user_detail.apartment.buildingId))
    }, [dispatch, user_detail])

    return(
        <ThemeProvider theme={theme}>
        <div className="contTitleAlertsUserView">
                    <h1>
                        Notificaciones
                    </h1>
                    <Link >
                        <Button variant="contained" style={{minWidth:'30px',maxWidth:'30px',minHeight:'30px',maxHeight:'30px', marginLeft:'20px', backgroundColor: "#ff0080"}}>
                            <SubscriptionsIcon style={{ fontSize: 25, color: "white" }}/>
                        </Button>
                    </Link>
        </div>
        <div className='PaginationAlertsUserView'>
        <Button variant="contained" onClick = {handlePreviuos} style={{minWidth:'30px',maxWidth:'30px',minHeight:'30px',maxHeight:'30px', backgroundColor: "#ff0080", marginRight:"20px"}}>
            <NavigateBeforeIcon style={{ fontSize: 25, color: "white" }}/>
        </Button>
        <div className='contExtAlertsUserView'>
            {
                current.map(alert => <Card key={alert.id} alert={alert}/>)
            }
            </div>
            <Button variant="contained" onClick = {handleNext} style={{minWidth:'30px',maxWidth:'30px',minHeight:'30px',maxHeight:'30px', backgroundColor: "#ff0080", marginLeft:"20px"}}>
            <NavigateNextIcon style={{ fontSize: 25, color: "white" }}/>
            </Button>
            </div>
        </ThemeProvider>
    )
}