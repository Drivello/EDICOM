const {Router} = require('express');

const spendings = require('./spendings');
const expenses = require('./expenses');
const apartments = require('./apartments');
const buildings = require('./buildings');
const alerts = require('./alerts');
const complaints = require('./complaints');
const users = require('./users');
const loggings = require('./loggings');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Redirigido desde el middleware que atrapa las rutas bloqueadas para el usuario loggueado
router.get('/unauthorized', (req, res) => {
    res.json("No authorization");
})

// Configurar los routers

router.use('/spendings', spendings);
router.use('/expenses', expenses);
router.use('/apartments', apartments);
router.use('/buildings', buildings);
router.use('/alerts', alerts);
router.use('/complaints', complaints);
router.use('/users', users);
router.use('/loggings', loggings);

module.exports = router;
