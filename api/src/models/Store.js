const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Store', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
<<<<<<< HEAD
          },
          //fecha de compra
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        //total de compra
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //estado de compra
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
=======
        }
>>>>>>> d93c52f599943a048680f7e10f2f8d34058160d9
    })
}