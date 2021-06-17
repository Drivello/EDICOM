const {Router} = require('express');

const spendings = require('./spendings');
const expenses = require('./expenses');
const apartments = require('./apartments');
const buildings = require('./buildings');
const alerts = require('./alerts');
const users = require('./users');
const {route} = require('./spendings');
const loggings = require('./loggings');
const amenities = require('./amenities');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
router.use('/spendings', spendings);
router.use('/expenses', expenses);
router.use('/apartments', apartments);
router.use('/buildings', buildings);
router.use('/alerts', alerts);
router.use('/users', users);
router.use('/loggings', loggings);
router.use('/amenities', amenities);

module.exports = router;
