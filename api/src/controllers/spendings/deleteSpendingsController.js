const { Spendings } = require("../../db.js");

module.exports = async (req, res, next) => {

    console.log(req.params)

    let {id} = req.params;
    
    try
    {
        await Spendings.destroy( {
            where: {
                id,
            }
        });

        return res.json(spending).status(200);
    }
    catch(err){
       /*  console.error(err); */
        // res.json(err);
        next(err);
    }
};