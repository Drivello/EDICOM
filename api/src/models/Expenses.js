const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    
  sequelize.define('Expenses', {
    month: {
      type: DataTypes.ENUM({
          values: ['ene', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
        }),
      allowNull: false,
      unique: 'complexUnique',
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'complexUnique',  
    },

    amount: {                                   //al momento de crearla se calcula según los gastos cargados
        type: DataTypes.FLOAT,
        allowNull: false,
    },
  });
};