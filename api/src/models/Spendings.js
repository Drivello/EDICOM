const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    
    sequelize.define('Spendings', {
        date: {
            type: DataTypes.DATE,
            // allowNull: false,
        },
        concept: {
            type: DataTypes.STRING,
            // allowNull: false,
            unique: true
        },
        details: {
            type: DataTypes.STRING(16384),
        },
        supplier: {                         //inicialmente es un atributo libre, pero dsps se puede crear una tabla para dar de alta proveedores
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        building: {                         //Este campo se tiene que sacar cuando se generen edificios de prueba para poder
            type: DataTypes.INTEGER,        //asignarle el id según la lista de edificios en el form de crear nuevo spending
            allowNull: false,
        },
    });
};