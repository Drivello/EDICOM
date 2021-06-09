const { Spendings } = require('../../db');

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