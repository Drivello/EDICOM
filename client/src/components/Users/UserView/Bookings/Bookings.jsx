import React, { useEffect } from 'react'
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


const useStyles = makeStyles({
    div:{
        margin:'10px',
        padding:'10px',
        justifyContent: 'space-between',
    },
    table: {
        /*  display:'flex', */
        justifyContent: 'space-between',
        marginTop: '3rem',
        minWidth: 650,
        width: '10rem',
        marginLeft: '2rem',
        margin:'4',
        gridGap: '20px',
        marginLeft:'30px'
        /*  display: 'line' */
        /*     border:'blue 100px solid' */
    },
    table1:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '45rem',
      
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
        marginLeft: '6rem'
    }
});


const Bookings = () => {
    
    const dispatch = useDispatch();
    const { bookings } = useSelector((state) => {
        return {
           /*  bookings: state.bookingReducer.bookings */
          
        };
     });

/*      const bookings = bookings.map((booking) => {
        return {}
    }); */
  
   /*  useEffect(() => {
        dispatch(getBookings())
    }, [dispatch]) */
	
    const classes = useStyles();
    return (
        <div className={classes.div}>
            <div className={classes.contenedor}>


                <div className={classes.table1}>

                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <div> 

                        <h2 className={classes.title}>Reservar</h2>
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

                                {/* {rows.map((row) => ( */}
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        Parrilla
                                    </TableCell>
                                    <TableCell align="right">28/06/2021</TableCell>
                                    <TableCell align="right">
                                        <Button variant="contained">Reservar</Button>

                                    </TableCell>
                                </TableRow>

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
