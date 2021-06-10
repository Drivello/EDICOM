const router = require('express').Router();
const express = require('express');

const allSpendings = require("../controllers/spendings/allSpendingsControllers");     
const addSpendings = require("../controllers/spendings/addSpendingsController");     
const putSpendings = require("../controllers/spendings/putSpendingsController");     

router.use(express.json());
router.get("/all", allSpendings);                   //      http://localhost:3001/spendings/all
router.post("/add", addSpendings);                  //      http://localhost:3001/spendings/add
router.put("/add", putSpendings);                  //      http://localhost:3001/spendings/add


router.get('/', async function(req,res,next){       //      endPoint
    console.log("Estoy en la ruta /spendings")
})

module.exports = router;