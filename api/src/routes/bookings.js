const router = require('express').Router();
const express = require('express');

const allBookings = require('../controllers/bookings/allBookingsControllers'); // import the controllers
const addBooking = require('../controllers/bookings/createBooking');
const deleteBooking = require('../controllers/bookings/deleteBookingControllers');
const putBooking = require('../controllers/buildings/putBuilding');

router.use(express.json());

router.get('/', allBookings); //      get -> localhost3001/bookings
router.post('/', addBooking); //      post -> localhost3001/bookings
router.delete('/:id', deleteBooking); //      delete -> localhost3001/bookings/:id
// router.put('/:id', putBooking);          //      put -> localhost3001/bookings

module.exports = router;
