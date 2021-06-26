const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('rating', {
        rating: {
            type: DataTypes.INTEGER,
            validate: {
                isbtw1and5: (value) => {
                  if(value < 6 && value > 0) return true
                  else return false
                }
            },
            allowNull: false,
        },
    },{paranoid: false});
};