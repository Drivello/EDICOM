const {Amenity, Buildings} = require('../../db');
//all amenities
module.exports = async (req, res, next) => {
	console.log('marce gato');
	const {id} = req.params;
	try {
		let amenities = await Amenity.findAll();
		return res.json(amenities);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
