import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../themeStyle';
import { useDispatch, useSelector } from 'react-redux';
import { putBooking } from '../../../redux/booking/bookingActions';
import { getBookingByAmenity } from "../../../redux/booking/bookingActions";
import styles from "./Styles.module.css";

export default function PopUp(props) {

    const dispatch = useDispatch();
    const setPop = props.setPop

   /*  const buildings = useSelector(state => state.buildingReducer.allBuildings);
    const dispatch = useDispatch();
    const setPop = props.setPop

    const handleOpen = () => {
        dispatch(putStateComplaint(props.alertProps.id, "opened"))
        dispatch(getComplaints())
        setPop(false)
    }

    const handleClose = () => {
        dispatch(putStateComplaint(props.alertProps.id, "closed"))
        dispatch(getComplaints())
        setPop(false)
    }
 */

    const freeBooking = (event) => {
        dispatch(putBooking(props.alertProps.id, {status: "free"}))
        console.log(props.alertProps)
        dispatch(getBookingByAmenity(props.alertProps.amenity))
        setPop(false)
    }

    const cancelBooking = (event) => {
        dispatch(putBooking(props.alertProps.id, {status: "cancelled"}))
        console.log(props.alertProps)
        dispatch(getBookingByAmenity(props.alertProps.amenity))
        setPop(false)
    }

    const takeBooking = (event) => {
        dispatch(putBooking(props.alertProps.id, {status: "booked"}))
        console.log(props.alertProps)
        dispatch(getBookingByAmenity(props.alertProps.amenity))
        setPop(false)
    }

    return (props.display) ? (
        <ThemeProvider theme={theme}>
            <div className='popUpAlert'>
                <div className='popup-inner'>
                    <div className='btnX'>
                        <input className='XinputBtn' type="button" value="X" onClick={() => props.setDisplay(false)} />
                    </div>
                    <div className='contExtDetailAlert'>
                        <Button id={styles.button} onClick={freeBooking} style={{ fontWeight: 1000 }} variant="contained" color="secondary" size="small" >
                            Liberar Turno
                        </Button>
                        <Button id={styles.button} onClick={cancelBooking} style={{ fontWeight: 1000 }} variant="contained" color="secondary" size="small" >
                            Cancelar Turno
                        </Button>
                        <Button id={styles.button} onClick={takeBooking} style={{ fontWeight: 1000 }} variant="contained" color="secondary" size="small" >
                            Reservar Turno
                        </Button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    ) : "";
}