const axios = require('axios');
const { Spendings } = require("../../db.js");

module.exports = async (req, res, next) => {

    const {month, year} = req.params;

    axios.get("http://localhost:3001/spendings/all")
        .then((response) => 
        {

            const suma = response.data.map((data) => data.amount).reduce((a, b) => a + b);
            
            res.json(suma + ''); 
        })
  
    
        
    // try
    // {
    //     let spending = await Spendings.create({
    //         date: date,
    //         concept: concept,
    //         details: details,
    //         supplier: supplier,
    //         amount: amount,
    //         building: building
    //     });

    //     return res.json(spending).status(200);
    // }
    // catch(err){
    //    /*  console.error(err); */
    //     res.json(err);
    // }
};