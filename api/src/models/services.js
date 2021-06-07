const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    
  sequelize.define('services', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
  });
};
