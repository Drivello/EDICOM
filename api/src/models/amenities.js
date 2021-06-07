const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    
  sequelize.define('amenities', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    maxPeople: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
  });
};
