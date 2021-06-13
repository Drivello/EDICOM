const {Apartment, Buildings} = require('../../db.js');

module.exports = async (req, res, next) => {
	let apartment = req.body;
	let {building} = req.body;
	try {
		apartment = await Apartment.create(apartment);
		apartment.setBuilding(building)
		return res.json(apartment).status(200);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};

