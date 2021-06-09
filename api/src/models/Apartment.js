const {DataTypes} = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	sequelize.define('apartment', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		building: {
			type: DataTypes.STRING(20),
		},
		cata_apartment: {
			type: DataTypes.STRING(20),
			unique: true,
		},
		owner: {
			type: DataTypes.STRING(20),
		},
		mt2: {
			type: DataTypes.INTEGER,
		},
		commons: {
			type: DataTypes.INTEGER,
		},
		expense: {
			type: DataTypes.INTEGER,
		},
		state: {
			type: DataTypes.INTEGER,
		},
	});
};
