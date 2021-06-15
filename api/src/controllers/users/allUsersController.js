const {User, Apartment, Buildings} = require('../../db');

module.exports = async (req, res, next) => {
	const {id} = req.params;
	console.log('BUILDINGGGGGGG', id);
	try {
		const building = await Buildings.findOne({where: {id}});
		console.log('FINDALLLL BUILDING', building);

		let apartments = await Apartment.findAll({
			where: {
				buildingId: building.id,
			},
		});
		console.log('FINDALLLL Apartment', typeof apartments);

		apartments.map(apa => console.log('AAAAAPAAAAAAAA', apa.id));

		let users = await User.findAll({
			include: {
				//<------ By this you can use association
				model: Apartment,
				where: {apartmentId: apartments},
			},
			/* where: {
				apartmentId: apartments.buildingId,
			}, */
		});

		return res.json(users);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
