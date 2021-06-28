import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { getComplaints, filterComplaints } from '../../redux/complaints/complaintsActions';
import { getExpensesApartmentNumber } from '../../redux/expenses/expensesActions';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import filter from '../../utils/filter-remove.png';
/* import PopUp from './PopUp'; */
import styles from "./Styles.module.css";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import { addPayment } from "../../redux/payments/paymentsActions";



function UserExpensesDetail(props) {

  console.log(props)

  const filteredComplaints = useSelector(state => state.complaintsReducer.filteredComplaints)
  const allComplaints = useSelector(state => state.complaintsReducer.allComplaints)
  const urlPayment = useSelector(state => state.paymentsReducer.urlPayment)
  const dispatch = useDispatch();

  let expenses = props?.expenses
  if(expenses[0]) expenses = expenses[0]?.Expenses;

  console.log("expenses", expenses)

  

  const complaints = expenses?.map(expense => {
    let monthSpanish;
    if (expense.month === "jan") monthSpanish = "Enero";
    if (expense.month === "feb") monthSpanish = "Febrero";
    if (expense.month === "mar") monthSpanish = "Marzo";
    if (expense.month === "apr") monthSpanish = "Abril";
    if (expense.month === "may") monthSpanish = "Mayo";
    if (expense.month === "jun") monthSpanish = "Junio";
    if (expense.month === "jul") monthSpanish = "Julio";
    if (expense.month === "aug") monthSpanish = "Agosto";
    if (expense.month === "sep") monthSpanish = "Septiembre";
    if (expense.month === "oct") monthSpanish = "Octubre";
    if (expense.month === "nov") monthSpanish = "Noviembre";
    if (expense.month === "dec") monthSpanish = "Diciembre";
    return {
      id: expense.id,
      month: monthSpanish || expense.moth,
      year: expense.year,
      amount: `$ ${expense.amount}`,
      status: expense.status
    }
  })

  const currencies = [
    {
      value: 'opened',
      label: 'Abierto',
    },
    {
      value: 'closed',
      label: 'Cerrado',
    },
  ];

  const [currency, setCurrency] = React.useState('opened');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  /* const importanceSelect = complaints.map(element => element = element.importance).filter((value, index, self) => self.indexOf(value) === index);
  const buildingSelect = complaints.map(element => element = element.building).filter((value, index, self) => self.indexOf(value) === index);
  const statusSelect = complaints.map(element => element = element.state).filter((value, index, self) => self.indexOf(value) === index);

 */

  const columns = [
    { field: 'year', headerName: 'Año', flex: 1},
    { field: 'month', headerName: 'Mes', flex: 1 },
    { field: 'amount', headerName: 'Monto', flex: 1 },
    { field: 'status', headerName: 'Estado', flex: 1 },
    { field: 'concept', headerName: 'Pagar', flex: 1,renderCell: (params) => {
      if(params.row.status === "Adeudada"){
        console.log(params)
        return (
          <Button color="secondary" onClick={() => handleEventClick (
            `${JSON.parse(localStorage.getItem('profile')).name} - Dpto: ${props.apartment}
            ${params.row.month}-${params.row.year}`,
             params.row.amount)}>
            Pagar
          </Button>)
      }
      else{
        return <h4>Pagada</h4>
      }
     } },
  ]

  const [input, setInput] = useState({
    building: 'All',
    importance: 'All',
    status: 'All'
  })
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [alertProps, setAlertProps] = useState({});

  const handleEventClick = (title, amount) => {
    
    amount = parseInt(amount.slice(2));

    dispatch(addPayment(title, amount));
  }


  function handleSelect(e) {
    setInput({ ...input, [e.target.name]: e.target.value })
  };

  function handleSelectAll(e) {
    setInput({ building: 'All', importance: 'All', status: 'All'})
    dispatch(filterComplaints({ building: 'All', importance: 'All', status: 'All'}))
}

  useEffect(() => {
    dispatch(getComplaints())
  },[dispatch])

  useEffect(() => {
    dispatch(filterComplaints(input))
  },[input,setInput]);

  useEffect(() => {
    if(urlPayment){
      window.open(urlPayment, '_blank').focus()
    }
  }, [urlPayment])

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div style={{ height: 400, width: '100%' }}>
      <div className= {styles.contSelectsComplaintsTable}>
{/*       <Grid container justify="flex-start" alignItems="center" className={classes.paper} item xs={6} sm={3}>
        <FormControl style={{width: '200px'}}>
            <InputLabel id="demo-controlled-open-select-label">Edificio</InputLabel>
            <Select name="building" onChange={handleSelect} value={input.building}>
            <MenuItem value="All">
              <em>All</em>
            </MenuItem >
            
            {buildingSelect.map((building, index) =>
              <MenuItem value={building} key={index}>{building}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid container justify="flex-start" alignItems="center" className={classes.paper} item xs={6} sm={3}>
        <FormControl style={{ width: '200px' }}>
          <InputLabel id="demo-controlled-open-select-label">Importancia</InputLabel>
          <Select name="importance" onChange={handleSelect} value={input.importance}>
            <MenuItem value="All">
              <em>All</em>
            </MenuItem >

            {importanceSelect.map((importance, index) =>
              <MenuItem value={importance} key={index}>{importance}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid container justify="flex-start" alignItems="center" className={classes.paper} item xs={6} sm={3}>
        <FormControl style={{ width: '200px' }}>
          <InputLabel id="demo-controlled-open-select-label">Estado</InputLabel>
          <Select name="status" onChange={handleSelect} value={input.status}>
            <MenuItem value="All">
              <em>All</em>
            </MenuItem >

            {statusSelect.map((status, index) =>
              <MenuItem value={status} key={index}>{status}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
      <Button variant="contained" color="secondary" style={{maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px', marginTop: "13px"}} onClick={handleSelectAll}>
          <img style={{width: "25px", height:"25px"}} src={filter}></img>
      </Button> */}
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        <DataGrid rows={complaints} columns={columns} pageSize={5} />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default UserExpensesDetail;