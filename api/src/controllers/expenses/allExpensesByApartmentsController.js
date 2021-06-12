const { Apartment, Expenses } = require("../../db.js");

module.exports = async (req, res, next) => {

	try{
		let data = await Apartment.findAll({
			include: [{
				model: Expenses
			}]
		});
		return res.json(data)
	} 
	catch(err){
		res.json(err)
		return console.log(err)
	}

}