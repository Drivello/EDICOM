const router = require('express').Router();
const express = require('express');

const allAmenities = require('../controllers/amenities/addAmenityController'); // importando todos los amenities
const findAmenity = require('../controllers/amenities/findAmenityController'); // importando buscar un amenity
const addAmenity = require('../controllers/amenities/addAmenityController'); // agregar un amenity
const allBuildings = require('../controllers/buildings/allBuildingsController');

router.use(express.json());

router.get('/all', allBuildings); //      localhost3001/amenities/all
router.get('/?name', findAmenity); //      ej: localhost3001/amenities?name=parrilla
router.post('/add', addAmenity); //      localhost3001/amenities/add

router.get('/', async function (req, res, next) {
	// endPoint
	console.log('Estoy en la ruta /amenities');
});

module.exports = router;
