const router = require('express').Router();
const express = require('express');

const allAlerts = require('../controllers/alerts/allAlertsController');     
const addAlert = require('../controllers/alerts/addAlertsController');     
const putAlert = require('../controllers/alerts/putAlertsController');     
const deleteAlerts = require('../controllers/alerts/deleteAlertsController');     

router.use(express.json());
router.get("/all", allAlerts);                   //      http://localhost:3001/alerts/all
router.post("/", addAlert);                  //      http://localhost:3001/alerts
router.put("/", putAlert);                  //      http://localhost:3001/alerts
router.delete("/", deleteAlerts);                  // http://localhost:3001/alerts


router.get('/', async function(req,res,next){       //      endPoint
    console.log("Estoy en la ruta /alerts")
})

module.exports = router;