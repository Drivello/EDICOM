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
        building: {                         //id de la tabla de buildings
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
};