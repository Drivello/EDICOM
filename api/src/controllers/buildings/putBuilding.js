const { Buildings } = require("../../db.js");

module.exports = async (req, res, next) => {
    let putId = req.body.id;

    await Buildings.update(
        { 
            cata: req.body.cata,
            floor: req.body.floor,
            apartments: req.body.apartments,
            name: req.body.name,
            address: req.body.address
        },
        { where: { id: putId } }
    )
        .then(() =>
            res.json({ succes: `Building updated successfully` }).status(200)
        )
        .catch(err =>
            res.status(404).json(new Error("Error updating the building"))
        )
};