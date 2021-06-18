const router = require('express').Router();
const express = require('express');

const allComplaints = require('../controllers/complaints/allComplaintsController');     
const addComplaint = require('../controllers/complaints/addComplaintsController');     
// const putAlert = require('../controllers/complaints/putComplaintsController');     
// const deleteAlerts = require('../controllers/complaints/deleteComplaintsController');     

router.use(express.json());
router.get("/all", allComplaints);
router.post("/", addComplaint);
// router.put("/", putAlert);
// router.delete("/:id", deleteAlerts);


router.get('/', async function(req,res,next){       //      endPoint
    console.log("Estoy en la ruta /complaints")
})

module.exports = router;