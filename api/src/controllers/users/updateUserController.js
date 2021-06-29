const {Apartment, User} = require('../../db.js');
const bcrypt = require('bcryptjs');

module.exports = async (req, res, next) => {
	let user = req.body;
	let {apartment, id} = req.body;
	console.log(req.body);
	console.log(req.params);
	console.log(user);
	try {
		const hashedPassword = await bcrypt.hash(user.password, 12);
		user = await User.update(
			{
				...user,
				password: hashedPassword,
			},
			{where: {id}}
		);
		// user.setApartment(apartment);
		return res.json(user).status(200);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
