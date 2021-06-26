const { Services } = require("../../db.js");

module.exports = async (req, res, next) => {

    let {id, title, provider, enrollment, contact, detail, building} = req.body;
    try
    {
        let alert = await Services.update({
            title,
            provider,
            enrollment: enrollment || null,
            contact,
            detail: detail || null,
            buildingId: building,

        },
        { where: { id: id } });

        return res.json(alert).status(200);
    }
    catch(err){
        next(err);
        res.status(500).json(new Error("Error updating"))
    }
};