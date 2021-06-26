const { Services, Ratings } = require("../../db.js");

module.exports = async (req, res, next) => {
    
	const id = req.params.id

	try {
		const ratingService = await Services.findOne({where: {id}})
		let ratingList = await Ratings.findAll({
			where: {
				servicesId: ratingService.id
			},
			order: [['createdAt', 'DESC']]
		});
		return res.json(data);
	} catch (err) {
        next(err);
		res.json(err);
		return console.log(err);
	}
};