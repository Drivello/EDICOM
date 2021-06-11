const { Buildings } = require("../../db.js");
const path = require('path');

module.exports = async (req, res, next) => {
    
    const file = req.files && req.files.image
    file && file.mv(path.resolve(`../client/public/uploads/${file.name}`))
    
    var building = JSON.parse(req.body.body);

    await Buildings.update(
        { 
            cata: building.cata,
            floor: building.floor,
            apartments: building.apartments,
            name: building.name,
            address: building.address,
            image: file && `../../../uploads/${file.name}`
        },
        { where: { id: building.id } }
    )
        .then(() =>
            res.json({ succes: `Building updated successfully` }).status(200)
        )
        .catch(err =>{
            console.log(err)
            res.status(404).json(new Error("Error updating the building"))
        })
};