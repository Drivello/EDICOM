const {Apartment} = require('../../db.js');

module.exports = async (req, res, next) => {
	var apartment = req.body;

	apartment = await Apartment.create(apartment);

	return res.json(apartment).status(200);
};
