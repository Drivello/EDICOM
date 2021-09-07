import React, { useEffect } from "react";
import { useParams} from 'react-router-dom' 
import { useDispatch } from "react-redux";
import BookingsTable from './BookingsTable';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../themeStyle'; 
import { getAmenityById } from '../../../redux/amenities/amenitiesActions';

const AmenitieDetail = (props) => {

  const { id } = useParams();
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getAmenityById(id))
    // eslint-disable-next-line
  },[])



  return (
    <ThemeProvider theme={theme}>
    <div className='contExtAlerts'>
        <div className='componentHeaderAlertsList'>
            <h1 className='contExtAlerts'>
                {name}:
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