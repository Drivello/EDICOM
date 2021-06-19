const {Amenity, Buildings} = require('../../db.js');

module.exports = async (req, res, next) => {
	let amenity = req.body;
	let {building} = req.body;
	try {
		amenity = await Amenity.create(amenity);
		amenity.setBuilding(building);
		return res.json(amenity).status(200);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
