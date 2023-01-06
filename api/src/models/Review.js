const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Review', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
<<<<<<< HEAD
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
              }
        },
        banned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
=======
>>>>>>> d93c52f599943a048680f7e10f2f8d34058160d9
        }
    })
}