const router = require('express').Router();
const express = require('express');

const allComplaints = require('../controllers/complaints/allComplaintsController');
const addComplaint = require('../controllers/complaints/addComplaintsController');
const putComplaint = require('../controllers/complaints/putComplaintsController');
const deleteComplaint = require('../controllers/complaints/deleteComplaintsController');
const complaintsBuilding = require('../controllers/complaints/complaintsBuildingController');
const findComplaint = require('../controllers/complaints/findComplaintController');

router.use(express.json());

router.get("/all", allComplaints);
router.post("/", addComplaint);
router.put("/", putComplaint);
router.delete("/:id", deleteComplaint);
router.get("/all/:id", complaintsBuilding);
router.get("/:id", findComplaint);


router.get('/', async function(req,res,next){       //      endPoint
    console.log("Estoy en la ruta /complaints")      
})

module.exports = router;