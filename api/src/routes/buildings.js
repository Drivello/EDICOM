const router = require('express').Router();
const express = require('express');


const allAmenities = require("../controllers/amenities/addAmenityController");     // importando todos los amenities

router.use(express.json());

router.get("/all", allAmenities);       //      localhost3001/amenities/all


router.get('/', async function(req,res,next){ // endPoint
    res.send("Estoy en la ruta /buildings")
})

module.exports = router;