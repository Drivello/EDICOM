const { Spendings } = require("../../db.js");

module.exports = async (req, res, next) => {

    console.log(req.params)

    let id = req.params.id;
    
    try
    {
        await Spendings.destroy( {
            where: {
                id: id,
            }
        });

        return res.json(spending).status(200);
    }
    catch(err){
       /*  console.error(err); */
        res.json(err);
    }
};