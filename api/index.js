const { DataTypes } = require('sequelize');

const server = require('./src/app.js'); //app
const { conn } = require('./src/db.js'); // conn es la instancia de la bbdd
const { Spendings, Apartment, Expenses, Buildings, Alerts } = require('./src/db.js');
const buildingsData = require('../buildingsDataMock.json'); // import json with fake buildings
const alertsData = require('../alertsDataMock.json');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('DB edicom is listening at 3001'); // eslint-disable-line no-console
  });




  
  // --------- Si es necesario precarga automática de datos de prueba si es necesario hacer acá ----------
  // -----------------------de hacer esto, traer el modelo necsario-----------------------

  let spending1 = Spendings.create({
    date: "April 13, 2021 1:00 PM",
    concept: "Desinfección",
    details: "Desinfección de patios y vereda",
    supplier: "Desfincecciones ATR",
    amount: 15000.0,
    building: 1
  });

  let spending2 = Spendings.create({
    date: "April 14, 2021 2:00 PM",
    concept: "Pintura",
    details: "Pintado de paredes exteriores",
    supplier: "Pintaman",
    amount: 25000.0,
    building: 1
  });

  let spending3 = Spendings.create({
    date: "April 15, 2021 3:00 PM",
    concept: "Mantenimiento bombas",
    details: "Reparación de bomba de agua del patio principal",
    supplier: "MacGyver",
    amount: 8000.0,
    building: 1
  });

  // --- Creamos unos departamentos de prueba

  let apartment1 = Apartment.create({
    cata_apartment: "1234567",
    owner: "Fulano",
    contact: "Fulan@gmail.com",
    mt2: 300,
    commons: 3213,
    state:242342
  });

  
  let apartment2 = Apartment.create({
    cata_apartment: "12435322",
    owner: "Pepe",
    contact: "pepe@gmail.com",
    mt2: 3010,
    commons: 3213,
    state:342
  });

  let apartment3 = Apartment.create({
    cata_apartment: "12678765",
    owner: "Pepe123",
    contact: "pepe123@gmail.com",
    mt2: 10010,
    commons:2713,
    state:323
  });


  // --- Creamos unas expensas de prueba

  let expense1 = Expenses.create({
    month: 'ene',
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


  Promise.all([spending1, spending2, spending3, apartment1, apartment2, apartment3, expense1, expense2, expense3])
    .then(res => {
      res[3].addExpense(res[6]);
      res[3].addExpense(res[7]);
      res[3].addExpense(res[8]);
      console.log("datos de prueba cargados");
      },
      () => console.log("no se cargaron los gastos de prueba")
    );
});
 
  // Mock Buildings Data
  let buildingsDataStr = JSON.stringify(buildingsData);
  let buildingsDataArray = JSON.parse(buildingsDataStr);
  let buildingsDataCreation = buildingsDataArray.map(building => {
    Buildings.create({
      cata: building.cata,
      floor: building.floor,
      apartments: building.apartments,
      name: building.name,
      address: building.address,
      latitude: building.latitude,
      longitude: building.longitude,
      image: building.image
    });
  });

  let alertsDataStr = JSON.stringify(alertsData);
  let alertsDataArray = JSON.parse(alertsDataStr);
  let alertDataCreation = async (array,Buildings,Alerts) => {
    for(var i=0; i< array.length; i++) {
      var Building = await Buildings.findByPk(array[i].building);
      var Alert = await Alerts.create({
        date: array[i].date,
        concept: array[i].concept,
        details: array[i].details || null,
        importance: array[i].importance
    });
    await Building.addAlert(Alert);
    }
  }
 
  
  Promise.all([spending1, spending2, spending3, buildingsDataCreation])
  .then(res => {
    alertDataCreation(alertsDataArray,Buildings,Alerts)
    console.log("gastos de prueba cargados");
    console.log("edificios de prueba cargados");
    console.log("alertas de prueba cargadas");
  },
  console.log("no se cargaron los gastos de prueba")
  );