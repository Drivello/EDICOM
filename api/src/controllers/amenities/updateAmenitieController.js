const {Amenity} = require('../../db.js');

module.exports = async (req, res, next) => {
	console.log(req.params);
	console.log(req.body);
	const {id, amenity_type, quantity, amenity_detail} = req.body;
	try {
		const amenity = await Amenity.findOne({where: {id}});
		amenity.amenity_type = amenity_type;
		amenity.quantity = quantity;
		amenity.amenity_detail = amenity_detail;

		amenity.save();
	} catch (error) {
		next(error);
	}
};
