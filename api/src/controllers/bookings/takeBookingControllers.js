const {Booking} = require('../../db');

module.exports = async (req, res, next) => {
	const {bookingId, userId} = req.params;
	console.log(req.body);
	console.log(req.params);

	try {
		const booking = await Booking.update(
			{
				userId,
				status: 'booked',
			},
			{
				where: {
					id: bookingId,
				},
			}
		);
		return res.json(booking).status(200);
	} catch (err) {
		/*  console.error(err); */
		next(err);
	}
};
