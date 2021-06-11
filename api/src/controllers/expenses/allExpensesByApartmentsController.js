const { Apartment } = require("../../db.js");

module.exports = async (req, res, next) => {

	try{
		let data = await Spendings.findAll();
		return res.json(data)
	} 
	catch(err){
		res.json(err)
		return console.log(err)
	}

}