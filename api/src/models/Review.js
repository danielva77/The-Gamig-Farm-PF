const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Review', {
        // id: {
        //     type: DataTypes.UUID,
        //     defaultValue: DataTypes.UUIDV4,
        //     allowNull: false,
        //     primaryKey: true,
        // },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
              }
        },
        banned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
}