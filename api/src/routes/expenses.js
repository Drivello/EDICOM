const router = require('express').Router();
const express = require('express');

const addExpenses = require("../controllers/expenses/addExpensesController");  
const allByApartments = require("../controllers/expenses/allExpensesByApartmentsController");  

router.post('/add/:month/:year', addExpenses)                //      'http://143.244.166.41:3001/expenses/add/:month/:year'
router.get('/allByApartments', allByApartments)                 //      'http://143.244.166.41:3001/expenses/allByApartments'

module.exports = router;