const { Spendings } = require("../../db.js");

module.exports = async (req, res, next) => {

    console.log(req)
    
    let [id, {date, name, details, supplier, amount, building}] = req.body;
    
    try
    {
        await Spendings.update({
            date: date,
            name: name,
            details: details,
            supplier: supplier,
            amount: amount,
            building: building
        }, {
            where: {
                id
            }
        });

        return res.json(spending).status(200);
    }
    catch(err){
       /*  console.error(err); */
        res.json(err);
    }
};