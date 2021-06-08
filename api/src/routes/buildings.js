const router = require('express').Router();
const express = require('express');


const allBuildings = require("../controllers/buildings/allBuildings");     // import the controller to show all buildings
const addBuilding = require("../controllers/buildings/allBuildings");     // import the controller to show all buildings

router.use(express.json());

router.get("/all", allBuildings);       //      get -> localhost3001/buildings/all
router.post("/", addBuilding);       //      post -> localhost3001/buildings


router.get('/', async function(req,res,next){ // endPoint
    res.send("Estoy en la ruta /buildings")
})

module.exports = router;