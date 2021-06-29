import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings, filterBookings, takeBooking, cancelBooking } from '../../../../redux/booking/bookingActions';
import {getIdUser} from '../../../../redux/logging/loggingActions'
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { Grid, Select, MenuItem} from "@material-ui/core";
import { allAmenities } from '../../../../redux/amenities/amenitiesActions';
import moment from "moment";
import swal from "sweetalert";


const useStyles = makeStyles({
    div: {
        margin: '10px',
        padding: '10px',
        justifyContent: 'space-between',
    },
    contenedor2: {
        /*    border:'yellow 2px solid', */
        display: 'flex',
        flexWrap: 'no-wrap',
        textAlign: 'center',

    },
    table: {
        /*  display:'flex', */
        justifyContent: 'space-between',
        marginTop: '3rem',
        minWidth: 650,
        width: '10rem',
        margin: '4',
        gridGap: '20px',
        marginLeft: '30px'
        /*  display: 'line' */
        /*     border:'blue 100px solid' */
    },
    table1: {

        display: 'flex',
        justifyContent: 'space-between',
        width: '45rem',
        /*     border:'red 2px solid' */

    },
    fila: {
        margin: '100px'
    },
    tableContainer: {

    },
    contenedor: {
        display: 'flex',
        justifyContent: 'space-around',
        /*     border: 'blue 100px solid' */
    },
    reglamento: {
        border: 'black 2px solid',
        marginTop: '8rem',
        marginLeft: '3rem'
    },
    title: {
        marginTop: '8rem',
        marginLeft: '6rem',
        /* border:'green 2px solid', */
        boxSizing: 'content-box',
        width: '100px'
    },
    paper: {

        marginTop: '90px',
        marginLeft: '20px'
    }
});


const Bookings = () => {

    const dispatch = useDispatch();
    const { allBookings, bookingNoToquesMauriQueSeRompeFilter } = useSelector((state) => state.bookingReducer)
    const { Amenities } = useSelector(state => state.amenitiesReducer)
    const {userId} = useSelector(state => state.loggingReducer)
    const [date, setDate] = useState(new Date(new Date()))
    const [input, setInput] = useState({
        bookingId: '',
        userId: ''
    })



    //const date2 = new Date(new Date());  
    /*      const bookings = bookings.map((booking) => {
            return {}
        }); */
    useEffect(() => {
        dispatch(getAllBookings())
        dispatch(allAmenities())
        dispatch(getIdUser(JSON.parse(localStorage.getItem('profile')).token))
    }, [dispatch])

    console.log('BOOKINGS FILTRADOS', bookingNoToquesMauriQueSeRompeFilter)

    console.log('USER ID', userId?.id)

    const idUsuarioLogeado = userId?.id

    
    const handleChange = (event) => {
        console.log('EVENT ACA', event)
        setInput({
            bookingId: event.target.value.id,
            userId: idUsuarioLogeado
        })
    };


    const handleDateChange = (date) => {
        setDate(date)
        dispatch(filterBookings(date))
    }
    
    const handleBookingChange = (e) => {
        console.log('ESTO VALE CUANDO PIDO UN TURNO', e.target)
    }


    const handleBooking = (e) => {
        dispatch(takeBooking(input))
    }
    const handleCancelBooking = (bookingId) => {
        swal("de re chupete la cancelaste", 'Success', "error")
        
        dispatch(cancelBooking(bookingId))
    }
    const classes = useStyles();

    return (
        <div className={classes.div}>
            <div className={classes.contenedor}>

                <div className={classes.table1}>

                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <div className={classes.contenedor2}>

                            <h2 className={classes.title}>Reservar</h2>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid
                                    container justify="flex-start" alignItems="center" className={classes.paper} item xs={6} sm={3}
                                >
                                    <KeyboardDatePicker
                                        name="since"
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Fecha"
                                        format="dd/MM/yyyy"
                                        value={date}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            "aria-label": "change date",
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </div>
                        <Table className={classes.table} aria-label="caption table">

                            <TableHead>
                                <TableRow className={classes.fila}>
                                    <TableCell>Amenitie</TableCell>
                                    <TableCell align="right">Seleccione un turno</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>


                                {
                                    Amenities && Amenities?.map((amenity, i) => {
                                        return(
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    {amenity.amenity_type}
                                                </TableCell>
                                                    <TableCell align="right">
                                                    <Select
                                                        labelId={amenity.id}
                                                        id={i}
                                                        value={amenity}
                                                        name={ amenity.amenity_type}
                                                        onChange={handleChange}
                                                    >
                                                    <MenuItem value="">
                                                        <em>{amenity.name}</em>
                                                    </MenuItem>
                                                            {bookingNoToquesMauriQueSeRompeFilter && bookingNoToquesMauriQueSeRompeFilter?.map((booking, i)=>{
                                                                if(amenity.id === booking.amenityId && booking.status === 'free'){
                                                                    return (
                                                                        <MenuItem
                                                                            key={booking.id}
                                                                            name={ booking}
                                                                            value={booking}
                                                                            onChange={() => handleBookingChange()}
                                                                        >{` ${amenity.id} ${moment(booking.start).format('LT')} ${booking.amenityId}`}
                                                                        </MenuItem>
                                                                                                                                              
                                                                    )
                                                                }
                                                            })}
                                                    </Select>                                                                                                            
                                                </TableCell>

                                                <TableCell align="right">
                                                    <Button variant="contained" onClick={handleBooking}>Reservar</Button>
                                                </TableCell>
                                            </TableRow> 
                                        )
                                    })
                                }

                                {/*
                                    Amenities && Amenities?.map((amenity, i) => {
                                        
                                        return (
                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    {amenity.amenity_type}
                                                </TableCell>
                                                <TableCell align="right">{
                                                    allBookings && allBookings?.map((booking, idx) => { 
                                                    return (
                                                        <select name="menu">
                                                            <option>{moment(booking.start).format('LT')}</option>
                                                        </select>                                                                                                            
                                                    )
                                                })
                                                }</TableCell>
                                                <TableCell align="right">
                                                    <Button variant="contained">Reservar</Button>

                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                */}



{/* allBookings && allBookings?.map((booking, i) => {
                                        if(booking.userId === idUsuarioLogeado) */}


                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>

                {/* SEGUNDA TABLA  */}
                <div>
                    <div className={classes.title}>
                        <h2 >Mis reservas</h2>
                    </div>
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table className={classes.table} aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Amenitie</TableCell>
                                    <TableCell align="right">Fecha</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {rows.map((row) => ( */}
                                {
                                    allBookings && allBookings?.map((booking, i) => {
                                        if(booking.userId === idUsuarioLogeado){
                                            return(
                                                <TableRow>
                                                    <TableCell component="th" scope="row">
                                                        {Amenities && Amenities?.map((amenity)=>{
                                                           return (amenity.id === booking.amenityId) ? <p>{amenity.amenity_type}</p> : null
                                                        })
                                                        
                                                        }
                                                    </TableCell>
                                                    <TableCell align="right">
                                                     {moment(booking.start).format('LT')}                                                                                                       
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Button variant="contained" onClick={() => handleCancelBooking(booking.id)}>Cancelar</Button>
                                                    </TableCell>
                                                </TableRow> 
                                            )
                                        }
                                    })

                                    }
                               {/*  <TableRow >
                                    <TableCell component="th" scope="row">
                                        Pileta
                                    </TableCell>
                                    <TableCell align="right">26/06/2021</TableCell>
                                    <TableCell align="right"><Button variant="contained">Cancelar</Button></TableCell>
                                </TableRow> */}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                </div>

            <div className={classes.reglamento}>
                <h4>Reglamento </h4>
                <p> Recuerde que el uso de las instalaciones es mera responsabilidad de la persona
                    a cargo de la reserva. <br />

                    En caso de tomar una reserva y no utilizarla será multado.</p>
            </div>
        </div>
    )
}

export default Bookings
