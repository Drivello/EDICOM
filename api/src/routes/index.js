const {Router} = require('express');

const spendings = require("./spendings")
const expenses = require("./expenses")
const apartments = require('./apartments');
const buildings = require('./buildings');
const alerts = require('./alerts');
const complaints = require('./complaints');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
router.use('/spendings', spendings)
router.use('/expenses', expenses)
router.use('/apartments', apartments);
router.use('/buildings', buildings);
router.use('/alerts', alerts);
router.use('/complaints', complaints);

module.exports = router;
