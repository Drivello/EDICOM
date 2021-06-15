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
import moment from 'moment'




const Board = (props) => {

  console.log("ESTOY RENDERIZANDO BOARDDDDDD")
  console.log(filterSpend)

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
    console.log("entrando al useSelector")
    return {
      filterSpend: state.reducerSpending.filterSpending,
      totalSpend: state.reducerSpending.totalSpending
    };
  });
  //-------------------------- Fin cambio Mapdispatch x useSelcetor pa traer acciones----------


  const spendings = filterSpend.map((spending) => {
    return {
      id: spending.id,
      date: moment(spending.date).format('L'),
      concept: spending.concept,
      details: spending.details,
      amount: spending.amount,
    }
  })

  console.log(spendings)

  //-------------------------- inicio trae del state global los gastos----------
  useEffect(() => {
    dispatch(totalSpending())
  }, [dispatch]);

  const date1 = new Date('2021-01-01T00:00:00')
  const date2 = new Date(new Date)
  // console.log(input);

  const [input, setInput] = useState({
    since: date1,
    upTo: date2,
    concept: 'All',
  })

  useEffect(() => {
    console.log('setInput update')
    dispatch(filterSpending(input))
  }, [input,setInput]);

  // setInput({...input, since: totalSpend.reduce(reducer, new Date("3000-04-13T16:00:00.000Z"))})

  function handleSinceChange(date) {
    setInput({ ...input, since: date });
  };

  function handleUpToChange(date) {
    setInput({ ...input, upTo: date });
  };

  function handleSelect(e) {
    console.log('handleSelect')
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  function handleSelectAll(e) {
    setInput({ since: date1, upTo: date2, concept: 'All'});
    dispatch(filterSpending(input))
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
              {/* <Button variant="contained" color="secondary" style={{ fontWeight: 1000, marginRight: "50px" }} onClick={handleSelectAll}>
                  Eliminar Filtros
                </Button> */}
              <div>
                {/* <Button variant="contained" color="secondary" style={{ fontWeight: 1000, marginRight: "50px" }} onClick={handleSubmit}>
                  Buscar
                </Button> */}
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
                    <Select name="concept" onChange={handleSelect}>
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem >
                      
                      {filterSpend.map((spending, index) =>
                        <MenuItem value={spending.concept} key={index}>{spending.concept}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>
              </MuiPickersUtilsProvider>
              <Button variant="contained" color="secondary" style={{ fontWeight: 1000, marginRight: "50px" }} onClick={handleSelectAll}>
                  Eliminar Filtros
              </Button>
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
