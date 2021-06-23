const {Amenity, User, Booking} = require('../../db.js');

module.exports = async (req, res, next) => {
	let {amenityId, userId, booking} = req.body;
	console.log(req.body);
	try {
		booking = await Booking.create(booking);
		booking.setAmenity(amenityId);
		booking.setUser(userId);
		return res.json(booking).status(200);
	} catch (error) {
		next(error);
	}
};

// module.exports = async (req, res, next) => {
// 	let amenity = req.body;
// 	let {building} = req.body;
// 	try {
// 		amenity = await Amenity.create(amenity);
// 		amenity.setBuilding(building);
// 		return res.json(amenity).status(200);
// 	} catch (err) {
// 		res.json(err);
// 		return console.log(err);
// 	}
// };
