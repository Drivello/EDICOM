import React, { useEffect } from "react";
import { getExpenses } from "../../redux/expenses/expensesActions";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import styles from "../Spending/board.module.css"         //AGREGAR UN CSS PROPIO DE ESTE COMPONENTE!
import ExpensesDetail from './ExpensesDetail'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";



//------------------------ MATERIAL UI




function createApartment(id, cata_apartment, number_apartment, mt2, state, expenses) {
  return {
      id,
      cata_apartment,
      number_apartment,
      mt2,
      state,
      expenses: expenses.map( (expensa) => {
         return expensa
      })
  };
}



export default function ExpensesTable() {
   
   
   const dispatch = useDispatch();

   
   // No se si anda
   /*  const apartamentArray = useSelector((state) => state.apartmentsReducer); */
   const expensesArray = useSelector((state) => state.reducerExpenses.expensesArray);
   
   useEffect(() => {
      dispatch(getExpenses());
   }, [dispatch]);

   let arrFinal = []
   expensesArray.map((apartment) => apartment.Expenses.map((a) => arrFinal.push(a)))

   const rows = expensesArray.map( (apartment) => {

      return createApartment(apartment.id, 
         apartment.cata_apartment, 
         apartment.number_apartment, 
         apartment.mt2, 
         apartment.state,
         apartment.Expenses
         )
   })

  return (
   <ThemeProvider theme={theme}>
   <div className={styles.header}>
      <h1>Expensas</h1>
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
         <TableHead>
            <TableRow>
               <TableCell />
               <TableCell>Id</TableCell>
               <TableCell align="right">Nº&nbsp;Catastral</TableCell>
               <TableCell align="right">Nº&nbsp;Dpto</TableCell>
               <TableCell align="right">Mt2</TableCell>
               <TableCell align="right">State</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {rows.map((apartment) => (
            <ExpensesDetail key={apartment.id} row={apartment} />
            ))}
         </TableBody>
      </Table>
      </TableContainer>
      </div>
    </ThemeProvider>
  );
}