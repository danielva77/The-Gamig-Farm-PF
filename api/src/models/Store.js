const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Store', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
          //fecha de compra
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        detail: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        //total de compra
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pay:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        //estado de compra
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    })
}