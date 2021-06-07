const router = require('express').Router();
const express = require('express');



router.get('/', async function(req,res,next){ // endPoint
    console.log("Estoy en la ruta /amenities")
})

module.exports = router;