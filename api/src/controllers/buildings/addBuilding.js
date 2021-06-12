const { Buildings } = require("../../db.js");
const path = require('path');

module.exports = async (req, res, next) => {
    const file = req.files && req.files.image
    file && file.mv(path.resolve(`../client/public/uploads/${file.name}`))
    var building = JSON.parse(req.body.body);
    var building = await Buildings.create({
        cata: building.cata,
        floor: building.floor,
        apartments: building.apartments,
        name: building.name,
        address: building.address,
        image: file && `../../../uploads/${file.name}`
    })
    .then(() => res.json(building).status(200))
    .catch(err => {
        console.log(err);
        res.status(400).json(new Error("Error creating the building"))
    })

};