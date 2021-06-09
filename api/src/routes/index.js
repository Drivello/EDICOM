const { Router } = require('express');

const services = require("./services")
const amenities = require("./amenities")
const spendings = require("./spendings")
const expenses = require("./expenses")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
router.use('/amenities', amenities)
router.use('/services', services)
router.use('/spendings', spendings)
router.use('/expenses', expenses)

module.exports = router;
