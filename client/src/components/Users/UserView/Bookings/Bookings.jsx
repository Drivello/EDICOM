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
import { getAllBookings } from '../../../../redux/booking/bookingActions';
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import { Grid, } from "@material-ui/core";
import { allAmenities } from '../../../../redux/amenities/amenitiesActions';
import moment from "moment";

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
    const { allBookings } = useSelector((state) => state.bookingReducer)
    const { Amenities } = useSelector(state => state.amenitiesReducer)
    const [date, setDate] = useState(new Date(new Date()))
    //const date2 = new Date(new Date());  
    /*      const bookings = bookings.map((booking) => {
            return {}
        }); */
    useEffect(() => {
        dispatch(getAllBookings())
        dispatch(allAmenities())
    }, [dispatch])
    

    console.log(allBookings)
    console.log(Amenities)

    const handleDateChange = (date) => {
        setDate(date)
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
                                    <TableCell align="right">Fecha</TableCell>
                                    <TableCell align="right">Acción</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {
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
                                }






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
                                    <TableCell align="right">Acción</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* {rows.map((row) => ( */}
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        Pileta
                                    </TableCell>
                                    <TableCell align="right">26/06/2021</TableCell>
                                    <TableCell align="right"><Button variant="contained">Cancelar</Button></TableCell>
                                </TableRow>

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
