const router = require('express').Router();
const express = require('express');

const allBookings = require('../controllers/bookings/allBookingsControllers'); // import the controllers
const addBooking = require('../controllers/bookings/createBooking');
const deleteBooking = require('../controllers/bookings/deleteBookingControllers');
const putBooking = require('../controllers/buildings/putBuilding');

router.use(express.json());

router.get('/', allBookings); //      get -> localhost3001/buildings/all
router.post('/', addBooking); //      post -> localhost3001/buildings
router.delete('/:id', deleteBooking); //      DELETE -> localhost3001/buildings
// router.put('/:id', putBooking); //      PUT -> localhost3001/buildings

module.exports = router;
