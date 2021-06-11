import React, { useEffect } from "react";
import { getExpenses } from "./../../redux/expenses/actionExpenses";
import { apartmentsActions } from "./../../redux/apartments/apartmentsActions";
import { useSelector } from "react-redux";

//------------------------ MATERIAL UI
import PropTypes from "prop-types";
import {
   makeStyles,
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

const Expenses = () => {
   const dispatch = useDispatch();

   // No se si anda
   /*  const apartamentArray = useSelector((state) => state.apartmentsReducer); */
   const expensesArray = useSelector((state) => state.reducerExpenses);

   useEffect(() => {
      dispatch(getExpenses);
   }, [input]);

   return;
   <div>
      {expensesArray && expensesArray.length > 1
         ? expensesArray.map((expenses, id) => {
              return;
              <div>
                 <p>{expenses.amount}</p>
                 <p>{expenses.month}</p>
                 <p>{expenses.year}</p>
              </div>;
           })
         : ""}
   </div>;
};
