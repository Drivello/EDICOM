const { Spendings } = require("../../db.js");


// Path of this controller --> Put(http://localhost:3001/spendings/add)
module.exports = async (req, res, next) => {
    
    console.log(req.body);

    let [id, {date, name, details, supplier, amount, building}] = req.body;

    console.log("update"); 
    try
    {
        const spending = await Spendings.update({
            date: date,
            name: name,
            details: details,
            supplier: supplier,
            amount: amount,
            buildingId: building
        }, {
            where: {
                id
            }
        });

        const spendingList = await Spendings.findAll()

        return res.json(spendingList).status(200);
    }
    catch(err){
       /*  console.error(err); */
        res.json(err);
    }
};