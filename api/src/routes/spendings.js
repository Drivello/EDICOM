const router = require('express').Router();
const express = require('express');

const allSpendings = require("../controllers/amenities/addAmenityController");     // importando todos los amenities

router.use(express.json());
router.get("/all", allSpendings);                   //      http://localhost:3001/spendings/all


router.get('/', async function(req,res,next){       //      endPoint
    console.log("Estoy en la ruta /spendings")
})

module.exports = router;