const { Amenity, Booking } = require('../../db.js');

module.exports = async (req, res, next) => {

	let { idAmenity, dateStart, dateEnd, timeStart, timeEnd, duration } = req.body;

	dateStart = new Date(dateStart);
	dateEnd = new Date(dateEnd);

	try {
		// Busco el amenity al que se le van a crear los turnos y lo guardo en "amenity"
		console.log('Estoy dentro del tryyyyyyyy');

		const amenity = await Amenity.findOne({
			where: {
				id: idAmenity,
			},
		});

		// Obetengo el cupo de ese amenity y lo guardo en "quota"
		const quota = amenity.capacity;

		// Calculo la cantidad de dias y turnos por día que se van a crear con los datos de:
		// dateStart, dateEnd, timeStart, timeEnd y quota

		const totalDays = Math.round((dateEnd.valueOf() - dateStart.valueOf()) / (1000 * 60 * 60 * 24) + 1);

		console.log('totalDayssssssssssssssss', totalDays)

		const [hoursStart, minutesStart] = timeStart.split(':');
		const [hoursEnd, minutesEnd] = timeEnd.split(':');
		const [hoursDuration, minutesDuration] = duration.split(':');



		timeStart = (new Date((new Date()).setHours(parseInt(hoursStart)))).getHours() * 60 + (new Date((new Date()).setMinutes(parseInt(minutesStart)))).getMinutes();
		timeEnd = (new Date((new Date()).setHours(parseInt(hoursEnd)))).getHours() * 60 + (new Date((new Date()).setMinutes(parseInt(minutesEnd)))).getMinutes();
		duration = (new Date((new Date()).setHours(parseInt(hoursDuration)))).getHours() * 60 + (new Date((new Date()).setMinutes(parseInt(minutesDuration)))).getMinutes();

		const bookingPerDay = Math.floor((timeEnd - timeStart) / (duration));

		console.log('BOOOKING PER DAAYYYYYYY', bookingPerDay);


		// day.setDate(day.getDate() + 1);
		let bookingInit = dateStart;

		console.log('bookingInitttttttttttt', bookingInit)
		bookingInit.setHours(timeStart / 60, timeStart % 60);

		console.log('bookingInitttttt con hora cambiadaaaaaaaa', bookingInit)

		// let bookingEnd = JSON.stringify(JSON.parse(dateStart));
		let bookingEnd = Object.assign(new Date(), dateStart)

		console.log(typeof duration)

		console.log('Numeradorrrrrrrrr', bookingInit.getHours() + duration / 60)
		console.log('Denominadorrrrrr', bookingInit.getMinutes() + duration)

		bookingEnd.setHours(
			bookingInit.getHours() + duration / 60,
			bookingInit.getMinutes() + duration % 60
		);

		console.log('bookingEndddddddddddddd', bookingEnd)

		let newBooking;

		console.log('totalDays', totalDays);
		console.log('bookingPerDay', bookingPerDay);

		console.log('tipo de total dayssssss', typeof totalDays)

		for (let i = 0; i < totalDays; i++) {
			console.log('entro al primeerrrrr FORRRRRRRRR');

			for (let j = 0; j < bookingPerDay; j++) {

				for (let k = 0; k < quota; k++) {

					console.log(
						'-------------------- estoy creando un nuevo booking ------------------------'
					);

					newBooking = await Booking.create({
						start: bookingInit,
						finish: bookingEnd,
					});
					await newBooking.setAmenity(amenity);

					console.log('booking', newBooking);
				}

				bookingInit.setHours(
					bookingInit.getHours() + duration / 60,
					bookingInit.getMinutes() + duration % 60
				);
				bookingEnd.setHours(
					bookingEnd.getHours() + duration / 60,
					bookingEnd.getMinutes() + duration % 60
				);
			}

			bookingInit.setDate(bookingInit.getDate() + 1);
			bookingInit.setHours(timeStart / 60, timeStart % 60);

			bookingEnd.setDate(bookingEnd.getDate() + 1);
			bookingEnd.setHours(
				bookingInit.getHours() + duration / 60,
				bookingInit.getMinutes() + duration % 60
			);
		}

		// retorno un status 201

		return res.json('Se cargaron los turnos');
	} catch (error) {
		console.log(error);
		next(error);
	}
};
