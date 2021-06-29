const {Apartment} = require('../../db.js');

module.exports = async (req, res, next) => {
	var id = req.params.id;
	try {
		var apartment = await Apartment.findOne({
			where: {
				id, //ver si van estos nombres
			},
		});
		res.status(200);
		return res.json(apartment);
	} catch (error) {
		return res.json({error: 'The apartment does not exist'}).status(404);
	}
};
