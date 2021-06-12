const { Alerts } = require("../../db.js");

module.exports = async (req, res, next) => {

    let {id, date, concept, details, importance} = req.body;
    
    try
    {
        let alert = await Alerts.update({
            date,
            concept,
            details: details || null,
            importance

        },
        { where: { id: id } });

        return res.json(alert).status(200);
    }
    catch(err){
        next(err);
        res.status(500).json(new Error("Error updating the alert"))
    }
};