const { Apartment, Expenses } = require("../../db.js");


// Path --> get(http://143.244.166.41:3001/expenses/allByApartments)
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