const { Spendings } = require("../../db.js");


// Path of this controller --> Put(http://localhost:3001/spendings/add)
module.exports = async (req, res, next) => {
    
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

        let buildingSearched = await Buildings.findOne({
            where: {
                id: building
            }
        })

        PromiseAll([spendings, buildingSearched])
            .then(() => {
                
                spending.setBuilding(buildingSearched)
            })

        return res.status(200);
    }
    catch(err){
       /*  console.error(err); */
        res.json(err);
    }
};