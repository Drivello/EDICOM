const {Apartment} = require('../../db.js');

module.exports = async (req, res, next) => {
	const {id} = req.params;
	const {contact, owner, state} = req.body;
	//console.log(cata_apartment)

	await Apartment.update(
		{
			contact: contact,
			owner: owner,
			state: state,
		},
		{where: {id: id}}
	);
	const apartment = await Apartment.findOne({where: {id: id}});
	res.send(apartment);
};
