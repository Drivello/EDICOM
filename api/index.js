const { DataTypes } = require('sequelize');

const server = require('./src/app.js'); //app
const { conn } = require('./src/db.js'); // conn es la instancia de la bbdd
const { Spendings, Apartment, Expenses, Buildings, Alerts,User } = require('./src/db.js');
const buildingsData = require('../buildingsDataMock.json'); // import json with fake buildings
const alertsData = require('../alertsDataMock.json');
const bcrypt = require('bcryptjs')

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
  });

  let spending2 = Spendings.create({
    date: "April 14, 2021 2:00 PM",
    concept: "Pintura",
    details: "Pintado de paredes exteriores",
    supplier: "Pintaman",
    amount: 25000.0,
  });

  let spending3 = Spendings.create({
    date: "April 15, 2021 3:00 PM",
    concept: "Mantenimiento bombas",
    details: "Reparación de bomba de agua del patio principal",
    supplier: "MacGyver",
    amount: 8000.0,
  });

  // --- Creamos unos departamentos de prueba

  let apartment1 = Apartment.create({
    cata_apartment: "1234567",
    number_apartment: "Fulano",
    mt2: 300,
    state:1
  });

  
  let apartment2 = Apartment.create({
    cata_apartment: "12435322",
    number_apartment: "Pepe",
    mt2: 3010,
    state: 1,
  });

  let apartment3 = Apartment.create({
    cata_apartment: "12678765",
    number_apartment:"234234",
    mt2: 10010,
    state:1
  });


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

// --- Creamos unos usuarios
const hashedPassword = bcrypt.hash("123", 12)
hashedPassword.then((res)=>{
  console.log("asdfsdafdasfasdfasdfasdf",res);
  let user1 = User.create({
    name:"agustin",
    email: "agustin@gmail.com",
    password: res,
    contact:"78788678",
    isDeleted:false
  });
  let user2 = User.create({
    name:"mariano",
    email: "mariano@gmail.com",
    password: res,
    contact:"78788678",
    isDeleted:false
  })
  let user3 = User.create({
    name:"mauri",
    email: "mauri@gmail.com",
    password: res,
    contact:"78788678",
    isDeleted:false
  })
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

  // console.log(buildingsDataCreation);
  
// ---              0         1           2         3           4           5           6       7           8             9.....21
  Promise.all([spending1, spending2, spending3, apartment1, apartment2, apartment3, expense1, expense2, expense3, ].concat(buildingsDataCreation))
    .then(res => {

      res[9].addSpendings([ res[0] , res[1], res[2] ])
      res[9].addApartments([ res[3], res[4], res[5]  ])
      res[3].addExpenses(res[6]);
      res[3].addExpense(res[7]);
      res[3].addExpense(res[8]);
      res[3].setBuilding(res[9])
      res[4].setBuilding(res[9])
      res[5].setBuilding(res[9])
      console.log("datos de prueba cargados");
      alertDataCreation(alertsDataArray,Buildings,Alerts);
      console.log("todo listo")
    },
      (err) =>{
        console.log("no se cargaron los gastos de prueba");
        console.log(err)
      }
    );
});
