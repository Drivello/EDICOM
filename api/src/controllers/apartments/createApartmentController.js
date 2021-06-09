const {Apartment, Buildings} = require('../../db.js');

module.exports = async (req, res, next) => {
	var apartment = req.body;

	// const building = await Buildings.findOne({
	// 	where: {id: req.params.id},
	// });

	apartment = await Apartment.create(apartment);

	return res.json(apartment).status(200);
};
