const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    
  sequelize.define('Expenses', {
    assignedMonth: {
      type: DataTypes.ENUM({
          values: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
        }),
      allowNull: false,
    },
    assignedYear: {
      type: DataTypes.INTEGER,
      allowNull: false,  
    },
    amount: {                                   //al momento de crearla se calcula según los gastos cargados
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    apartment: {                                //id de la tabla de apartments
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  });
};