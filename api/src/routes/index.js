const {Router} = require('express');

const services = require('./services');
const amenities = require('./amenities');
const apartments = require('./apartments');
const buildings = require('./buildings');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
router.use('/amenities', amenities);
router.use('/services', services);
router.use('/apartments', apartments);
router.use('/buildings', buildings);

module.exports = router;
