const {User, Apartment, Buildings} = require('../../db');

module.exports = async (req, res, next) => {
	const {id} = req.params;
	try {
		const building = await Buildings.findOne({where: {id}});

		let apartments = await Apartment.findAll({
			where: {
				buildingId: building.id,
			},
		});

		const allUsers = await User.findAll();

		const users_building = [];

		const trola = apartments.map(apa => {
			return allUsers.find(u => u.dataValues.apartmentId === apa.id);
		});

		return res.json(trola);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};

/* 
db.users.findAll({
	include: [
	  {
		model: db.posts,
		include: [
		  {
			model: db.comments
		  }
		]
	  }
	]
  }) 
db.comments.belongsTo(db.posts);
db.posts.hasMany(db.comments);
db.posts.belongsTo(db.users);
db.users.hasMany(db.posts);
 
 
 db.building.finddAll({
	where: {id}
	include: [
		model: db.apartments,
		where: {buildingId: building.id:}
		include: [
		{
			where: {apartmentId: id}
			model: db.user
		}
		]
	]
 })
 
 
  */
