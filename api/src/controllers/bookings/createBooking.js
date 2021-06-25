const {Amenity, Booking} = require('../../db.js');

module.exports = async (req, res, next) => {
	console.log('REEEEEEEEEEQBOOOOOOODY', req.body);

	let {idAmenity, dateStart, dateEnd, timeStart, timeEnd, duration} = req.body;

	try {
		// Busco el amenity al que se le van a crear los turnos y lo guardo en "amenity"
		console.log('Estoy dentro del tryyyyyyyy');

		const amenity = await Amenity.findOne({
			where: {
				id: idAmenity,
			},
		});

		console.log('Encontré el amenity', amenity);

		// Obetengo el cupo de ese amenity y lo guardo en "quota"
		const quota = amenity.capacity;

		console.log('quota', quota);

		// Calculo la cantidad de dias y turnos por día que se van a crear con los datos de:
		// dateStart, dateEnd, timeStart, timeEnd y quota
		const totalDays =
			(dateEnd.valueOf() - dateStart.valueOf()) / (1000 * 60 * 60 * 24) + 1;

		console.log('totalDays', totalDays);

		const bookingPerDay =
			Math.floor(
				(timeEnd.getHours() - timeStart.getHours()) * 60 +
					(timeEnd.getMinutes() - timeStart.getMinutes())
			) /
			(duration.getHours() * 60 + duration.getMinutes());

		console.log('bookingPerDay', bookingPerDay);

		// Hago un bucle for de 1 a la cantidad de turnos a crear y en cada vuelta de bucle
		// creo una nueva instancia de "Booking", cuando se finaliza la promesa de creación
		// se la asigno a "amenity"

		// day.setDate(day.getDate() + 1);
		let bookingInit = dateStart;
		bookingInit.setHours(timeStart.getHours(), timeStart.getMinutes());

		let bookingEnd = dateStart;
		bookingEnd.setHours(
			bookingInit.getHours() + duration.getHours(),
			bookingInit.getMinutes() + duration.getMinutes()
		);

		let newBooking;

		console.log('totalDays', totalDays);
		console.log('bookingPerDay', bookingPerDay);

		for (let i = 0; i < totalDays; i++) {
			console.log('entro al primeerrrrr FORRRRRRRRR');

			for (let j = 0; j < bookingPerDay; j++) {
				console.log(
					'-------------------- estoy creando un nuevo booking ------------------------'
				);
				newBooking = await Booking.create({
					start: bookingInit,
					finish: bookingEnd,
				});

				await newBooking.setAmenity(amenity);

				console.log('booking', newBooking);

				bookingInit.setHours(
					bookingInit.getHours() + duration.getHours(),
					bookingInit.getMinutes() + duration.getMinutes()
				);
				bookingEnd.setHours(
					bookingEnd.getHours() + duration.getHours(),
					bookingEnd.getMinutes() + duration.getMinutes()
				);
			}

			bookingInit.setDate(bookingInit.getDate() + 1);
			bookingInit.setHours(timeStart.getHours(), timeInit.getMinutes());

			bookingEnd.setDate(bookingEnd.getDate() + 1);
			bookingEnd.setHours(
				bookingInit.getHours() + duration.getHours(),
				bookingInit.getMinutes() + duration.getMinutes()
			);
		}

		// retorno un status 201

		return res.json('Se cargaron los turnos');
	} catch (error) {
		res.json(error);
	}
};
