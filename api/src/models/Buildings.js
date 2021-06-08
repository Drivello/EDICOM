const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

    sequelize.define('buildings', {
        cata: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        floor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apartments: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
