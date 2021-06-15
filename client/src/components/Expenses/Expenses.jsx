import React, { useEffect, useState } from "react";
import { getExpenses } from "./../../redux/expenses/actionExpenses";
import { apartmentsActions } from "./../../redux/apartments/apartmentsActions";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themeStyle';
import styles from "./../spending/board.module.css"         //AGREGAR UN CSS PROPIO DE ESTE COMPONENTE!
import ExpensesDetail from './ExpensesDetail'

import {
   Box,
   Collapse,
   IconButton,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Typography,
   Paper,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";


//------------------------ MATERIAL UI
import {
 
   Container
  
 } from "@material-ui/core";


// const Expenses = () => {





   // const dispatch = useDispatch();

   // // No se si anda
   // /*  const apartamentArray = useSelector((state) => state.apartmentsReducer); */
   // const expensesArray = useSelector((state) => state.reducerExpenses.expensesArray);


//    useEffect(() => {
//       dispatch(getExpenses());
//    }, [dispatch]);

// console.log(expensesArray)

//    const [expensed, setExpensed] = useState([]);

//    let arrFinal = []
//    expensesArray.map((apartment) => apartment.Expenses.map((a) => arrFinal.push(a)))
//    //  var expMan = expensesArray.map((apartment) => apartment.Expenses.map((a) => {console.log(a)}))
//    //  console.log("expMan", expMan)
//    console.log("arrFinal", arrFinal)

//    //EN CASO DE UN PUT Y QUE NO FUNCIONE , REVISAR ESTE USE EFFECT
//    useEffect(() => {
//       setExpensed(arrFinal)
//    }, []);
  
//    console.log("expensed", expensed)

//    return (
//   <div style={{ display:'flex' ,justifyContent:'center' , alignItems:'center', marginTop:'300px', marginLeft:'300px' }}>
//          {arrFinal && arrFinal?.length > 0
//             ? arrFinal?.map((e) => {
           
//                return (
//                   <Container className="filtersBoard">
                
//                   <div>{ e.amount}</div>
//                   <div>{e.month}</div>
//                   <div>{e.year}</div>
//                   <br/> 
                  
//                   </Container>
                  
//                )
//             })
//             : ""}
//       </div>
//    )
// };
// export default Expenses;



// ----------------------------- MATERIA UI ------------------------



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
   console.log("arrFinal", arrFinal)
   
   console.log("expensesArray", expensesArray)


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