const { Complaints, Buildings } = require("../../db.js");
const path = require('path');

module.exports = async (req, res, next) => {
    let { date, subject, details, building, importance } = req.body;
    try
    {
        // const file = req.files && req.files.image
        // file && file.mv(path.resolve(`../client/public/uploads/${file.name}`))
        var buildingCurrent = await Buildings.findByPk(building);
        var complaint = await Complaints.create({
            date,
            subject,
            details,
            importance,
            // image: file && `../../../uploads/${file.name}`
        });
        await buildingCurrent.addComplaint(complaint);
        console.log(`Complaint created successfully`);
        return res.status(200).json({succes: `Complaint created successfully`});
    }
    catch(err){
        next(err);
        res.status(500).json(new Error("Error creating the complaint"))
    }
};