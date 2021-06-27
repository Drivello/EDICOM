import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from '../../redux/users/userActions';
import { getServicesBuilding } from '../../redux/services/servicesAction';
import ServiceCard from "./ServiceCard";
import {Button} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import './Services.css';


export default function ServiceContainer(props) {
    const id = props.match.params.id;
    const user_detail = useSelector(state => state.userReducer.userDetail);
    const services = useSelector(state => state.servicesReducer.buildingServices);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [alertsPerPage] = useState(4);
    const indexOfLast = currentPage * alertsPerPage;
    const indexOfFirst = indexOfLast - alertsPerPage;

    const services_aproved = services && services.filter(service => service.accepted).slice(indexOfFirst,indexOfLast);

    const handleNext = () => {
        if(indexOfLast <= services.length -1)  setCurrentPage(currentPage + 1)
    }
    const handlePreviuos = () => {
        if(indexOfFirst > 1)  setCurrentPage(currentPage - 1)
    }

    useEffect(() => {
        dispatch(getUser(id))
    }, [dispatch])

    useEffect(() => {
        user_detail && dispatch(getServicesBuilding(user_detail.apartment.buildingId))
    }, [dispatch, user_detail])

    return (
        <ThemeProvider theme={theme}>
            <div className='contExtCardsandIconsPaginate'>
            <Button variant="contained" color ="secondary" onClick = {handlePreviuos} style={{minWidth:'30px',maxWidth:'30px',minHeight:'30px',maxHeight:'30px', marginRight:"40px"}}>
            <NavigateBeforeIcon style={{ fontSize: 25, color: "#212121" }}/>
            </Button>
            <div className="contExtServicesCards">
                {
                    services_aproved && services_aproved.map(service => <ServiceCard key={service.id} service={service}/>)       
                }
            </div>
            <Button variant="contained" color ="secondary" onClick = {handleNext} style={{minWidth:'30px',maxWidth:'30px',minHeight:'30px',maxHeight:'30px', marginLeft:"40px"}}>
            <NavigateNextIcon style={{ fontSize: 25, color: "#212121" }}/>
            </Button>
            </div>
        </ThemeProvider>
    )
}