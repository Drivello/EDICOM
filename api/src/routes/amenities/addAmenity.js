const { Amenities } = require("../../db.js");

module.exports = async (req, res, next) => {

  var amenity = req.body;
  
  var amenity = await Amenities.create({
      //crear con los datos de modelo de amenities
  });

return res.json(amenity).status(200);

};