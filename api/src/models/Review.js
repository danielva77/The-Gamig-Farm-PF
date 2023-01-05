const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Review', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        }
    })
}