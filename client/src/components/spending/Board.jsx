import './board.css'
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom' 
import { useSelector, useDispatch } from "react-redux";
import { totalSpending, filterSpending, deleteSpending   } from '../../redux/spending/actionSpending'
import { Container, Typography, Button, Grid, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { DataGrid} from '@material-ui/data-grid';
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';





const Board = (props) => {

  //--------------------------- Creando estructura de la tabla ------------------------

  const columns = [
    {field: 'id', headerName: 'ID', flex: 1.5, hide: true},
    {field: 'date', headerName: 'Fecha', flex: 3},
    {field: 'concept', headerName: 'Concepto', flex: 3},
    {field: 'details', headerName: 'Detalle', flex: 5},
    {field: 'amount', headerName: 'Importe', flex: 3},
    {
      field: 'edit',
      headerName: 'Editar - Eliminar', 
      type: '', 
      flex: 3, 
    
      renderCell: (params) => (
        <Link to={__dirname + `spendings/board/${params.id}/edit` }>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
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
   const filterSpend = useSelector(
    (state) => state.reducerSpending.filterSpending,// revisar cuando haga pull el nombre del reducer
  );

  const totalSpend = useSelector( //reducer
    (state) => state.reducerSpending.totalSpending
  )
  //-------------------------- Fin cambio Mapdispatch x useSelcetor pa traer acciones----------


  const spendings = filterSpend.map((spending)=> {
    return {
      id: spending.id,
      date: spending.date,
      concept: spending.concept,
      details: spending.details,
      amount: spending.amount,
    }
  })

  console.log((<Link to={__dirname + `board/1/edit` }>
  Editar/Eliminar 
  </Link>).props.children);

//-------------------------- fin trae del state global los gastos----------




//----------------------- inicio estado interno con los 3 filtros -----------
const reducer = (candidato, currentValue) => {
  return candidato < currentValue.date ? candidato : currentValue.date; 
};

// const date1 = totalSpend.reduce(reducer, new Date("3000-04-13T16:00:00.000Z"));

//-------------------------- inicio trae del state global los gastos----------
useEffect(() => {
  dispatch(totalSpending())
  .then(() => 
  setInput({...input, since: totalSpend.reduce(reducer, new Date("3000-04-13T16:00:00.000Z"))})
  )
  console.log("useEffect", totalSpend.reduce(reducer, new Date("3000-04-13T16:00:00.000Z")))
}, [dispatch]);


  // const date1 = new Date('2021-01-01T21:11:54')
  const date2 = new Date(new Date)
  console.log(input)

  const [input, setInput] = useState({
    since: date2,
    upTo: date2,
    concept: 'All',
  })



  function handleSinceChange (date){
    setInput({...input, since: date});
  };

  function handleUpToChange (date){
    setInput({...input, upTo: date});
  };

  function handleSelect(e) { 
    setInput({...input, [e.target.name]: e.target.value})
  }

  
  function handleSubmit(e) {
    dispatch(filterSpending(input))
  }

    return (
        <Container className={classes.root}>
          <Container className="filtersBoard">
              <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                <Button variant="contained" color="primary" href="./newSpending" >
                  Agregar gasto
                </Button>        
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                  <KeyboardDatePicker
                    name="since"
                    margin="normal"
                    id="date-picker-dialog"
                    label="From"
                    format="MM/dd/yyyy"
                    value={input.since}
                    onChange={handleSinceChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}/>
                </Grid>

                <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                  <KeyboardDatePicker
                    name="upTo"
                    margin="normal"
                    id="date-picker-dialog"
                    label="To"
                    format="MM/dd/yyyy"
                    value={input.upTo}
                    onChange={handleUpToChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}/>
                </Grid>

                <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                  <FormControl >
                    <InputLabel id="demo-controlled-open-select-label">Concept</InputLabel>
                    <Select name="concept" onClick={handleSelect}>
                      <MenuItem value="All" >
                        <em>All</em>
                      </MenuItem >
                      {totalSpend.map((sepndings, index) =>
                      <MenuItem value={sepndings.concept} key={index}>{sepndings.concept}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>
              </MuiPickersUtilsProvider>
          </Container>

          <Container>
            <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
              <Button variant="contained" color="primary"  onClick={handleSubmit}>
                Buscar
              </Button>        
            </Grid>

            {/* <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
              <Button variant="contained" color="primary"  >
                Eliminar Filtros
              </Button>        
            </Grid> */}

          </Container>

          <Container className="table">
            <Typography variant="h2" className="componentHeading1">Spendings</Typography>
          
            <Container style={{height: 400, width: '100%'}}>
              
              <Container style={{display: 'flex', height: '100%'}}>
                  <DataGrid rows={spendings} columns={columns} pageSize={5} />
              </Container>

            </Container>
          
          </Container>

        </Container>
    )
}

export default Board
