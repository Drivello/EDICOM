import React, { useEffect, useState } from "react";
import { getExpenses } from "./../../redux/expenses/actionExpenses";
import { apartmentsActions } from "./../../redux/apartments/apartmentsActions";
import { useSelector, useDispatch } from "react-redux";
//------------------------ MATERIAL UI

const Expenses = () => {
   const dispatch = useDispatch();

   // No se si anda
   /*  const apartamentArray = useSelector((state) => state.apartmentsReducer); */
   const expensesArray = useSelector((state) => state.reducerExpenses.expensesArray);


   useEffect(() => {
      dispatch(getExpenses());
   }, [dispatch]);



   const [expensed, setExpensed] = useState([]);

   if (expensed.length === 0) {
      if (expensesArray && expensesArray.length > 0) {
         expensesArray.map((expenses) => {
            if (expenses.Expenses.length > 0) {
               setExpensed(expenses.Expenses)
            }
         }
         )

      }
   }

   return (
      <div>
         {expensed && expensed?.length > 0
            ? expensed?.map((e) => {
           
               return (
                  <div>
                  <div>{e.amount}</div>
                  <div>{e.month}</div>
                  <div>{e.year}</div>
                  <br/>
                  </div>
                  
               )
            })
            : ""}
      </div>
   )
};
export default Expenses;
