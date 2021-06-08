const {Apartment} = require('../../db.js');

module.exports = async (req, res, next) => {
	var apartment = req.body;

	var apartment = await Apartment.create({
		//crear con los datos de modelo de Apartment
	});

	return res.json(apartment).status(200);
};
