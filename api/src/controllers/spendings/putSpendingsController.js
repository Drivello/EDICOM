const { Spendings } = require("../../db.js");


// Path of this controller --> Put(http://143.244.166.41:3001/spendings/add)
module.exports = async (req, res, next) => {
    
    let [id, {date, name, details, supplier, amount, building}] = req.body;

    // console.log(req.user);

    if(req.user.typeUser !== 'admin')
    {
        console.log("no es un adminnnnnn")
        return res.status(403).json(new Error("Usuario no autorizado"));
    }

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