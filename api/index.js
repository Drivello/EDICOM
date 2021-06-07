const server = require('./src/app.js'); //app
const { conn } = require('./src/db.js'); // conn es la instancia de la bbdd


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('DB edicom is listening at 3001'); // eslint-disable-line no-console
  });

  // --------- Si es necesario precarga automática de datos de prueba si es necesario hacer acá ----------
  // -----------------------de hacer esto, traer el modelo necsario-----------------------

});