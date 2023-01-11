const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Mark', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    })
}