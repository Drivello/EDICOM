const { Service, Rating } = require("../../db.js");

module.exports = async (req, res, next) => {

    let { rating, serviceId } = req.body;
    
    try
    {
        let service = await Service.findByPk( serviceId );
        let newRating = await Service.create({
            rating
        });
        await Service.addRating(newRating);
        return res.status(200).json({succes: `Rating created successfully`});
    }
    catch(err){
        next(err);
        res.status(500).json(new Error("Error creating the new rating"))
    }
};