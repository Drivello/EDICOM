const {Router} = require('express');

const services = require('./services');
const amenities = require('./amenities');
const apartments = require('./apartments');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
router.use('/amenities', amenities);
router.use('/services', services);
router.use('/apartments', apartments);

module.exports = router;
