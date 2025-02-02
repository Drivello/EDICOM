import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button} from '@material-ui/core';
import { getComplaints, filterComplaints } from '../../redux/complaints/complaintsActions';
import { DataGrid } from '@material-ui/data-grid';
/* import PopUp from './PopUp'; */
import styles from "./Styles.module.css";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import { addPayment, resetUrlPayment } from "../../redux/payments/paymentsActions";



function UserExpensesDetail(props) {

  console.log(props)

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
      amount: `${new Intl.NumberFormat('es-AR', {currency: 'ARS', style: 'currency'}).format(expense.amount)}`,
      status: expense.status,
      createdAt: expense.createdAt
    }
  })

  const columns = [
    { field: 'year', headerName: 'Año', flex: 1},
    { field: 'createdAt', headerName: 'createdAt', flex: 1, hide: true},
    { field: 'month', headerName: 'Mes', flex: 1 },
    { field: 'amount', headerName: 'Monto', flex: 1 },
    { field: 'status', headerName: 'Estado', flex: 1 },
    { field: 'concept', headerName: 'Pagar', flex: 1,renderCell: (params) => {
      if(params.row.status === "Adeudada"){
        console.log(params)
        return (
          <Button variant="contained" color="secondary" onClick={() => handleEventClick (
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

  const handleEventClick = (title, amount) => {
    
    amount = parseInt(amount.slice(2));

    dispatch(addPayment(title, amount));
  }

  useEffect(() => {
    dispatch(getComplaints())
  },[dispatch])

  useEffect(() => {
    dispatch(filterComplaints(input))
    // eslint-disable-next-line
  },[input,setInput]);

  useEffect(() => {
    if(urlPayment){
      window.open(urlPayment, '_blank').focus()
    }
    return(
      () => {
        dispatch(resetUrlPayment())
      }
    )
    // eslint-disable-next-line
  }, [urlPayment])

  return (
    <ThemeProvider theme={theme}>
    <div style={{ height: 400, width: '100%' }}>
      <div className= {styles.contSelectsComplaintsTable}>
      </div>
      <div style={{ display: 'flex', height: '100%' }}>
        <DataGrid sortModel={[
    {
      field: 'createdAt',
      sort: 'desc',
    },
  ]}
  rows={complaints} columns={columns} pageSize={5} />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default UserExpensesDetail;