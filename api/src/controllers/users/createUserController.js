const {Apartment, User} = require('../../db.js');

module.exports = async (req, res, next) => {
	let user = req.body;
	let {apartment} = req.body;
	console.log('USERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', user);
	try {
		user = await User.create(user);
		user.setApartment(apartment);
		return res.json(user).status(200);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
