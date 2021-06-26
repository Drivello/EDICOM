import React, { useEffect, useState } from "react";
import { Link , useParams} from 'react-router-dom' 
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import BookingsTable from './BookingsTable';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../themeStyle'; 
import AddIcon from '@material-ui/icons/Add';
import { getAmenityById } from '../../../redux/amenities/amenitiesActions';

const AmenitieDetail = (props) => {

  const { id } = useParams();

  /* const allComplaints = useSelector(state => state.complaintsReducer.allComplaints) */
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getAmenityById(id))
  },[])



  return (
    <ThemeProvider theme={theme}>
    <div className='contExtAlerts'>
        <div className='componentHeaderAlertsList'>
            <h1 className='contExtAlerts'>
                Amenitie:
            </h1>
        </div>
        <div className='contAlertsTable'>
          <BookingsTable amenitieId={id}/ >
        </div>
    </div>
    </ThemeProvider>
);
}

export default AmenitieDetail;