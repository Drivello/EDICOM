const { Buildings } = require("../../db.js");

module.exports = async (req, res, next) => {

    var building = req.body;
    var building = await Buildings.create({
        cata: building.cata,
        floor: building.floor,
        apartments: building.apartments
    })
    .then(() => res.json(building).status(200))
    .catch(err => {
        console.log(err);
        res.status(400).json(new Error("Error creating the building"))
    })

};