const { DataTypes } = require('sequelize');

const server = require('./src/app.js'); //app
const { conn } = require('./src/db.js'); // conn es la instancia de la bbdd
const { Buildings, Spendings } = require('./src/db.js');
const buildingsData = require('../buildingsDataMock.json'); // import json with fake buildings

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('DB edicom is listening at 3001'); // eslint-disable-line no-console
  });




  
  // --------- Si es necesario precarga automática de datos de prueba si es necesario hacer acá ----------
  // -----------------------de hacer esto, traer el modelo necsario-----------------------

  let spending1 = Spendings.create({
    date: "March 13, 2021 1:00 PM",
    concept: "Desinfección",
    details: "Desinfección de patios y vereda",
    supplier: "Desfincecciones ATR",
    amount: 15000.0,
    building: 1
  });

  let spending2 = Spendings.create({
    date: "March 14, 2021 2:00 PM",
    concept: "Pintura",
    details: "Pintado de paredes exteriores",
    supplier: "Pintaman",
    amount: 25000.0,
    building: 1
  });

  let spending3 = Spendings.create({
    date: "March 15, 2021 3:00 PM",
    concept: "Mantenimiento bombas",
    details: "Reparación de bomba de agua del patio principal",
    supplier: "MacGyver",
    amount: 8000.0,
    building: 1
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
      image: building.image
    });
  });
  
  Promise.all([spending1, spending2, spending3, buildingsDataCreation])
  .then(res => {
    console.log("gastos de prueba cargados");
    console.log("edificios de prueba cargados");
  },
  console.log("no se cargaron los gastos de prueba")
  );
});