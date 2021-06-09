const { Spendings } = require("../../db.js");

module.exports = async (req, res, next) => {

    let {date, name, details, supplier, amount, building} = req.body;
    
    try
    {
        let spending = await Spendings.create({
            date: date,
            name: name,
            details: details,
            supplier: supplier,
            amount: amount,
            building: building
        });

        return res.json(spending).status(200);
    }
    catch(err){
        console.error(err);
        res.json(error);
    }
};