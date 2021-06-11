import './board.css'
import React, { useEffect,useState } from "react";
import { Link } from 'react-router-dom' 
import { connect } from "react-redux";
import { totalSpending, filterSpending, deleteSpending   } from '../../redux/spending/actionSpending'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { DataGrid} from '@material-ui/data-grid';
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';



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
      <Link to={__dirname + `board/${params.id}/edit` }>
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

const Board = (props) => {
  
  const classes = useStyles();

  const spendings = props.filterSpend.map((spending)=> {
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

  //-------------------------- inicio trae del state global los gastos----------
  useEffect(() => {
    props.totalSpending()
  },[])
  //-------------------------- fin trae del state global los gastos----------


  //----------------------- inicio estado interno con los 3 filtros -----------

  const [input, setInput] = useState({
    since: '',
    upTo: '',
    concept: '',
  })
  
  function handleSelect(e) { 
    setInput({...input, [e.target.name]: e.target.value})
  }
  
  function handleSubmit(e) { 
    props.filterSpending(input)
  }


  
  const date = new Date()
  

    return (
        <Container className={classes.root}>
          <Container className="filtersBoard">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="From"
                    format="MM/dd/yyyy"
                    // value={selectedDate}
                    onChange={handleSelect}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}/>
                </Grid>

                <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="To"
                    format="MM/dd/yyyy"
                    // value={selectedDate}
                    onChange={handleSelect}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}/>
                </Grid>

                <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
                  <FormControl>
                    <InputLabel id="demo-controlled-open-select-label">Concept</InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        // open={open}
                        // onClose={handleClose}
                        // onOpen={handleOpen}
                        // value={age}
                        // onChange={handleChange}
                        onChange={handleSelect}
                      >
                      <MenuItem value="">
                        <em>All</em>
                      </MenuItem>
                      {props.totalSpend.map((e, index) => 
                      <MenuItem key={index}>{e.concept}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>

              </MuiPickersUtilsProvider>
          </Container>

          <Container>
            <Grid container justify="space-around" className={classes.paper} item xs={6} sm={3}>
              <Button variant="contained" color="primary" href="#contained-buttons" onClick={handleSubmit}>
                Find
              </Button>        
            </Grid>
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


function mapStateToProps(state) {

  return {
    totalSpend: state.reducerSpending.totalSpending,
    filterSpend: state.reducerSpending.filterSpending
  }; 
}
  
function mapDispatchToProps(dispatch) {
  return {
    totalSpending: total => dispatch(totalSpending(total)), // me asocio a la action
    filterSpending: filter => dispatch(filterSpending(filter)),
    deleteSpending: del => dispatch(deleteSpending(del)),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Board);




// Up to
// <select name="upTo" seiz="4" onChange={handleSelect}>  
//   <option>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</option>                
//   {props.totalSpend.map((e, index) => 
//     <option key={index}>{e.date}</option>
//   )}
// </select>

// Concept
// <select name="concept" seiz="4" onChange={handleSelect}>
//   <option> All </option>
//   {props.totalSpend.map((e, index) => 
//     <option key={index}>{e.concept}</option>
//   )}
// </select>