const { Buildings } = require("../../db.js");

module.exports = async (req, res, next) => {
    let delId = req.params.id;
    
    await Buildings.destroy({
        where: { id: delId }
    })
        .then(() => res.json({succes: `Building deleted successfully`}).status(200))
        .catch(err => {
            console.log(err);
            res.status(400).json(new Error("Error deleting the building"))
        })
};