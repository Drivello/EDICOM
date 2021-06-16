import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
   Box,
   Collapse,
   IconButton,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
   Typography,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";


export default function Row(props) {

    const useRowStyles = makeStyles({
        root: {
           '& > *': {
              borderBottom: 'unset',
           },
        },
     });

    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell align="right">{row.cata_apartment}</TableCell>
          <TableCell align="right">{row.number_apartment}</TableCell>
          <TableCell align="right">{row.mt2}</TableCell>
          <TableCell align="right">{row.state}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Mes</TableCell>
                      <TableCell>Año</TableCell>
                      <TableCell align="right">Importe</TableCell>
                      {/* <TableCell align="right">Total price ($)</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.expenses.map((expense) => (
                      <TableRow key={expense.id}>
                        <TableCell component="th" scope="row">
                          {expense.month}
                        </TableCell>
                        <TableCell>{expense.year}</TableCell>
                        <TableCell align="right">{expense.amount}</TableCell>
                        {/* <TableCell align="right">
                          {Math.round(expense.amount * row.price * 100) / 100}
                        </TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
        }),
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
    }).isRequired,
  };