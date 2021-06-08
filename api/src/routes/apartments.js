const router = require('express').Router();
const express = require('express');

const allApartments = require('../controllers/apartments/allApartmentsController');
const createApartment = require('../controllers/apartments/createApartmentController');
const deleteApartment = require('../controllers/apartments/deleteApartmentController');
const getApartmentById = require('../controllers/apartments/getApartmentByIdController');

router.use(express.json());

router.get('/', allApartments);
router.get('/:id', getApartmentById);
router.post('/add', createApartment);
router.delete('/delete/:id', deleteApartment);

module.exports = router;
