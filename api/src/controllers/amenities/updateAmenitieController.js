const {Amenity} = require('../../db.js');

module.exports = async (req, res, next) => {
	const {id} = req.params;
	const {amenity_type, quantiy, amenity_detail} = req.body;
	await Amenity.update(
		{
			amenity_type: amenity_type,
			quantiy: quantiy,
			amenity_detail: amenity_detail,
		},
		{where: {id}}
	);
	const amenity = await Amenity.findOne({where: {id}});
	res.send(amenity);
};
