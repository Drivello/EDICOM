const {Booking} = require('../../db');

module.exports = async (req, res, next) => {
	const {bookingId} = req.params;

	try {
		const booking = await Booking.update(
			{
				userId: null,
				status: 'free',
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
