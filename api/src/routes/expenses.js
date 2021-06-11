const router = require('express').Router();
const express = require('express');

const addExpenses = require("../controllers/expenses/addExpensesController");  
const allByApartments = require("../controllers/expenses/allExpensesByApartmentsController");  

router.get('/add/:month/:year', addExpenses)                //      'http://localhost:3001/expenses/add/:month/:year'
router.get('/allByApartments', allByApartments)                 //      'http://localhost:3001/expenses/allByApartments'

module.exports = router;