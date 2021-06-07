const router = require('express').Router();
const express = require('express');


const allAmenities = require("./allAmenities");     // importando todos los amenities
const findAmenity = require("./findAmenity");       // importando buscar un amenity
const addAmenity = require("./addAmenity");         // agregar un amenity

router.use(express.json());

router.get("/all", allAmenities);       //      localhost3001/amenities/all
router.get("/?name", findAmenity);      //      ej: localhost3001/amenities?name=parrilla
router.post("/add", addAmenity);        //      localhost3001/amenities/add





router.get('/', async function(req,res,next){ // endPoint
    console.log("Estoy en la ruta /amenities")
})

module.exports = router;