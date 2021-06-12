const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    
  sequelize.define('Expenses', {
    month: {
      type: DataTypes.ENUM({
          values: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
        }),
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,  
    },

    amount: {                                   //al momento de crearla se calcula según los gastos cargados
        type: DataTypes.FLOAT,
        allowNull: false,
    },
  });
};