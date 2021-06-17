const {User} = require('../../db.js');

module.exports = async (req, res, next) => {
	let {id, name, email, password, contact, isDeleted}= req.body;
	try {
		user = await User.findOne({where: {id}});

        user.name = name;
        user.email = email;
        user.password = password;
        user.contact = contact;
        user.isDeleted = isDeleted;
		user.save();

		return res.json(user).status(200);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
