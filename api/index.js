const {DataTypes} = require('sequelize');

const { server } = require('./src/app.js'); //app
const { conn } = require('./src/db.js'); // conn es la instancia de la bbdd
const {
	Spendings,
	Apartment,
	Expenses,
	Buildings,
	Alerts,
	User,
	Amenity,
	Complaints,
	Admin,
	Booking
} = require('./src/db.js');

const buildingsData = require('../buildingsDataMock.json'); // import json with fake buildings
const alertsData = require('../alertsDataMock.json');
const complaintsData = require('../complaintsDataMock.json');
const bcrypt = require('bcryptjs');

// Syncing all the models at once.
conn.sync({force: true}).then(() => {
	server.listen(3001, () => {
		console.log('DB edicom is listening at 3001'); // eslint-disable-line no-console
	});

	// --------- Si es necesario precarga automática de datos de prueba si es necesario hacer acá ----------
	// -----------------------de hacer esto, traer el modelo necsario-----------------------

	let spending1 = Spendings.create({
		date: 'April 13, 2021 1:00 PM',
		concept: 'Desinfección',
		details: 'Desinfección de patios y vereda',
		supplier: 'Desfincecciones ATR',
		amount: 15000.0,
	});

	let spending2 = Spendings.create({
		date: 'April 14, 2021 2:00 PM',
		concept: 'Pintura',
		details: 'Pintado de paredes exteriores',
		supplier: 'Pintaman',
		amount: 25000.0,
	});

	let spending3 = Spendings.create({
		date: 'April 15, 2021 3:00 PM',
		concept: 'Mantenimiento bombas',
		details: 'Reparación de bomba de agua del patio principal',
		supplier: 'MacGyver',
		amount: 8000.0,
	});

	// --- Creamos unos departamentos de prueba

	let apartment1 = Apartment.create({
		cata_apartment: 'AK12347',
		number_apartment: 'A1',
		mt2: 300,
		state: 1,
	});

	let apartment2 = Apartment.create({
		cata_apartment: 'CDMIL31',
		number_apartment: 'A2',
		mt2: 3010,
		state: 1,
	});

	let apartment3 = Apartment.create({
		cata_apartment: 'BK5T533T80Y',
		number_apartment: 'A3',
		mt2: 10010,
		state: 1,
	});

	// --- Creamos unos usuarios
	const hashedPassword = bcrypt.hash('123', 12);

	var user1 = hashedPassword.then(res => {
		return User.create({
			name: 'Agustin',
			email: 'agustin@gmail.com',
			password: res,
			contact: '78788678',
			isDeleted: false,
		});
	});
	var user2 = hashedPassword.then(res => {
		return User.create({
			name: 'Mauri',
			email: 'mauriciocuello91@gmail.com',
			password: res,
			contact: '78788678',
			isDeleted: false,
		});
	});
	var user3 = hashedPassword.then(res => {
		return User.create({
			name: 'Mariano',
			email: 'marianoguillon@hotmail.com',
			password: res,
			contact: '78788678',
			isDeleted: false,
		});
	});


	// --- Creamos un admin ---

	const hashedPassword2 = bcrypt.hash("321", 12)

	var admin1 = hashedPassword2.then((res)=>{
		return Admin.create({
			name:"the admin",
			email: "admin@gmail.com",
			password: res,
			contact:"33445566",
		});
	})


	// --- Creamos unas expensas de prueba

	let expense1 = Expenses.create({
		month: 'jan',
		year: 2021,
		amount: 5000,
	});

	let expense2 = Expenses.create({
		month: 'feb',
		year: 2021,
		amount: 5200,
	});

	let expense3 = Expenses.create({
		month: 'mar',
		year: 2021,
		amount: 3700,
	});

	let amenitie1 = Amenity.create({
		amenity_type: 'Pileta',
		quantity: '1',
		capacity: '3',
		amenity_detail: 'Aca, en la pile, contesteeeen'
	})

	let amenitie2 = Amenity.create({
		amenity_type: 'Gimnacio',
		quantity: '1',
		capacity: '3',
		amenity_detail: 'Aca, en la pile, contesteeeen'
	})

	let amenitie3 = Amenity.create({
		amenity_type: 'Parrilla',
		quantity: '1',
		capacity: '3',
		amenity_detail: 'Tripa gordaaa'
	})

	let booking1 = Booking.create({
		idAmenity: 1,
		start: '2021-06-24T16:50:00.000Z',
		finish: '2021-06-30T16:50:00.000Z',
		status:"free",
		timeStart: '07:30',
		timeEnd: '21:30',
		duration: '08:00'
	})

	let booking2 = Booking.create({
		idAmenity: 2,
		start: '2021-06-24T16:50:00.000Z',
		finish: '2021-06-30T16:50:00.000Z',
		timeStart: '07:30',
		timeEnd: '21:30',
		duration: '08:00',
		status:"free"
	})

	let booking3 = Booking.create({
		idAmenity: 3,
		start: '2021-06-24T16:50:00.000Z',
		finish: '2021-06-30T16:50:00.000Z',
		timeStart: '07:30',
		timeEnd: '21:30',
		status:"free",
		duration: '08:00'
	})

	// Mock Buildings Data
	let buildingsDataStr = JSON.stringify(buildingsData);
	let buildingsDataArray = JSON.parse(buildingsDataStr);
	let buildingsDataCreation = buildingsDataArray.map(building => {
		return Buildings.create({
			cata: building.cata,
			floor: building.floor,
			cant_apartments: building.cant_apartments,
			name: building.name,
			address: building.address,
			latitude: building.latitude,
			longitude: building.longitude,
			image: building.image,
		});
	});

	let alertsDataStr = JSON.stringify(alertsData);
	let alertsDataArray = JSON.parse(alertsDataStr);
	let alertDataCreation = async (array, Buildings, Alerts) => {
		for (var i = 0; i < array.length; i++) {
			var Building = await Buildings.findByPk(array[i].building);
			var Alert = await Alerts.create({
				date: array[i].date,
				concept: array[i].concept,
				details: array[i].details || null,
				importance: array[i].importance,
			});
			await Building.addAlert(Alert);
		}
	};

	// reclamos de prueba
	let complaintsDataStr = JSON.stringify(complaintsData);
	let complaintsDataArray = JSON.parse(complaintsDataStr);
	let complaintsDataCreation = async (array, Buildings, Complaints) => {
		for(var i = 0; i < array.length; i++) {
		var Building = await Buildings.findByPk(array[i].building);
		var Complaint = await Complaints.create({
			date: array[i].date,
			subject: array[i].subject,
			details: array[i].details || null,
			importance: array[i].importance,
			image: array[i].image
		});
		await Building.addComplaint(Complaint);
		}
	}

	
	// ---              0         1           2         3           4           5           6       7           8       9      10    11
	Promise.all(
		[
			spending1, //0
			spending2, //1
			spending3, //2
			apartment1, //3
			apartment2, //4
			apartment3, //5
			expense1, //6
			expense2, //7
			expense3, //8
			user1, //9
			user2, //10
			user3, //11
			amenitie1, //12
			amenitie2, //13
			amenitie1, //14
			booking1, //15
			booking2, //16
			booking3, //17
		].concat(buildingsDataCreation) ////18.....29
		.concat([admin1])
		.concat([amenitie1, amenitie2, amenitie3, booking1, booking2, booking3])
	).then(
		res => {
			res[15].setAmenity(res[12])
			res[16].setAmenity(res[13])
			res[17].setAmenity(res[14])
			res[18].addSpendings([res[0], res[1], res[2]]);
			res[18].addApartments([res[3], res[4], res[5]]);
			res[3].addExpenses(res[6]);
			res[3].addExpense(res[7]);
			res[3].addExpense(res[8]);
			res[3].setBuilding(res[18]);
			res[4].setBuilding(res[18]);
			res[5].setBuilding(res[18]);
			res[9].setApartment(res[3]);
			res[10].setApartment(res[4]);
			res[11].setApartment(res[5]);
			res[30].addBuilding(res[18]);
			console.log('datos de prueba cargados');
			alertDataCreation(alertsDataArray, Buildings, Alerts);
			complaintsDataCreation(complaintsDataArray, Buildings, Complaints);
			console.log('todo listo');
		},
		err => {
			console.log('no se cargaron los gastos de prueba');
			console.log(err);
		}
	);
});

