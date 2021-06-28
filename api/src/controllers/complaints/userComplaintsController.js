const { Complaints, User } = require('../../db');

module.exports = async (req, res, next) => {
    const id = req.params.id;
	try{
		let data = await Complaints.findAll({
			include: [{
                model: User,
				attributes: ['name']
            }],
            where: {
                userId: id
            }
		});
		return res.json(data);
	} 
	catch(err){
        next(err);
		res.json(err);
	}
}