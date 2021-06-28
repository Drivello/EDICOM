const { Apartment, Expenses } = require("../../db.js");


// Path --> get(http://localhost:3001/expenses/allByApartments)
module.exports = async (req, res, next) => {

	var id = req.params.apartmentName;
	try{
		let data = await Apartment.findAll({
			include: [{
				model: Expenses
			}],
			where: {
				number_apartment: id, //ver si van estos nombres
			},
		});
		return res.json(data)
	} 
	catch(err){
		res.json(err)
		return console.log(err)
	}

}