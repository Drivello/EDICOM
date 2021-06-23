const { Alerts, Buildings } = require("../../db.js");

module.exports = async (req, res, next) => {
	const id = req.params.id
	try {
		const buildingAlert = await Buildings.findOne({where: {id}})
		let data = await Alerts.findAll({
			where: {
				buildingId: buildingAlert.id
			},
			order: [['date', 'DESC']]
		});
		return res.json(data);
	} catch (err) {
        next(err);
		res.json(err);
		return console.log(err);
	}
};
