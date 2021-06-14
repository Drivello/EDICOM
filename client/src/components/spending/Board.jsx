import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { totalSpending, filterSpending, deleteSpending } from '../../redux/spending/actionSpending'
import { Container, Typography, Button, Grid, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import styles from "./board.module.css"





const Board = (props) => {


  //--------------------------- Creando estructura de la tabla ------------------------

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1.5, hide: true },
    { field: 'date', headerName: 'Fecha', flex: 3 },
    { field: 'concept', headerName: 'Concepto', flex: 3 },
    { field: 'details', headerName: 'Detalle', flex: 5 },
    { field: 'amount', headerName: 'Importe', flex: 3 },
    {
      field: 'edit',
      headerName: 'Editar - Eliminar',
      type: '',
      flex: 3,

      renderCell: (params) => (
        <Link to={__dirname + `spendings/board/${params.id}/edit`}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16, fontWeight: 1000 }}
          >
            Editar
          </Button>
        </Link>
      )
    },
  ]

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


  const classes = useStyles();
  const dispatch = useDispatch();


  //-------------------------- Inicio cambio Mapdispatch x useSelcetor pa traer acciones----------
  //  const filterSpend = useSelector(
  //   (state) => state.reducerSpending.filterSpending,// revisar cuando haga pull el nombre del reducer
  // );

  // const totalSpend = useSelector( //reducer
  //   (state) => state.reducerSpending.totalSpending
  // )

  const { filterSpend, totalSpend } = useSelector(state => {
    return {
      filterSpend: state.reducerSpending.filterSpending,
      totalSpend: state.reducerSpending.totalSpending
    };
  });
  //-------------------------- Fin cambio Mapdispatch x useSelcetor pa traer acciones----------


  const spendings = filterSpend.map((spending) => {
    return {
      id: spending.id,
      date: spending.date,
      concept: spending.concept,
      details: spending.details,
      amount: spending.amount,
    }
  })

  // console.log((<Link to={__dirname + `board/1/edit` }>
  // Editar/Eliminar 
  // </Link>).props.children);

  //-------------------------- fin trae del state global los gastos----------




  //----------------------- inicio estado interno con los 3 filtros -----------


  //LLEVAR ESTA LÓGICA AL REDUCER
  // const reducer = (candidato, currentValue) => {
  //   return candidato < currentValue.date ? candidato : currentValue.date; 
  // };

  // const date1 = totalSpend.reduce(reducer, new Date("3000-04-13T16:00:00.000Z"));

  //-------------------------- inicio trae del state global los gastos----------
  useEffect(() => {
    dispatch(totalSpending())

  }, [dispatch]);


  // const date1 = new Date('2021-01-01T21:11:54')
  const date2 = new Date(new Date)
  // console.log(input);

  const [input, setInput] = useState({
    since: date2,
    upTo: date2,
    concept: 'All',
  })

  // setInput({...input, since: totalSpend.reduce(reducer, new Date("3000-04-13T16:00:00.000Z"))})


  function handleSinceChange(date) {
    setInput({ ...input, since: date });
  };

  function handleUpToChange(date) {
    setInput({ ...input, upTo: date });
  };

  function handleSelect(e) {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    dispatch(filterSpending(input))
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.header}>
      <div className={styles.componentHeading1}>
        <h1>Gastos:</h1>
        <div>
        <Button variant="contained" color="secondary" style={{ fontWeight: 1000 }} href="./newSpending" >
                  Agregar gasto
        </Button>
      </div>
      </div>
        <Container className={classes.root}>
          <Container className="filtersBoard">
            <div className={styles.date}>
              <div>
                <Button variant="contained" color="secondary" style={{ fontWeight: 1000, marginRight: "50px" }} onClick={handleSubmit}>
                  Buscar
                </Button>
              </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                  <KeyboardDatePicker
                    name="since"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Desde"
                    format="MM/dd/yyyy"
                    value={input.since}
                    onChange={handleSinceChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }} />
                </Grid>

                <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                  <KeyboardDatePicker
                    name="upTo"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Hasta"
                    format="MM/dd/yyyy"
                    value={input.upTo}
                    onChange={handleUpToChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }} />
                </Grid>

                <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                  <FormControl style={{width: '200px'}}>
                    <InputLabel id="demo-controlled-open-select-label">Concepto</InputLabel>
                    <Select name="concept" onClick={handleSelect}>
                      <MenuItem value="" >
                        <em>All</em>
                      </MenuItem >
                      {totalSpend.map((sepndings, index) =>
                        <MenuItem value={sepndings.concept} key={index}>{sepndings.concept}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>
              </MuiPickersUtilsProvider>

            </div>
          </Container>

          <Container className="table">
            <Container style={{ height: 400, width: '100%' }}>

              <Container style={{ display: 'flex', height: '100%' }}>
                <DataGrid rows={spendings} columns={columns} pageSize={5} />
              </Container>

            </Container>

          </Container>

        </Container>
      </div>
    </ThemeProvider>
  )
}

export default Board
