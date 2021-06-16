const router = require('express').Router();
const express = require('express');

const loggingIn = require("../controllers/loggings/loggingInController");      

router.use(express.json());
router.post("/loggingIn", loggingIn);                   //      http://localhost:3001/spendings/add


router.get('/', async function(req,res,next){       //      endPoint
    console.log("Estoy en la ruta /spendings")
})

module.exports = router;