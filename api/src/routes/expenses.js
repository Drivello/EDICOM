const router = require('express').Router();

const addExpenses = require("../controllers/expenses/addExpensesController");  
const allByApartments = require("../controllers/expenses/allExpensesByApartmentsController");  
const invoicedExpenses = require("../controllers/expenses/invoicedExpensesController");  


router.post('/add/:month/:year', addExpenses)                //      'http://localhost:3001/expenses/add/:month/:year'
router.get('/allByApartments', allByApartments)                 //      'http://localhost:3001/expenses/allByApartments'
router.get('/invoicedExpenses', invoicedExpenses)                 //      'http://localhost:3001/expenses/invoicedExpenses'


module.exports = router;