/**
 * *******************************************************************
 * Este archivo es solamente para usar de guía. Se lo puede modificar.
 *
 * Se lo usa este modelo tambien en db.js para crear relaciones.
 *
 * (Se tomó como ejemplo el boilerplate del PI)
 * ********************************************************************
 */

const { DataTypes } = require("sequelize")
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define(
    "Category",
    {
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
      },
    },
    {
      timestamps: false,
    }
  )
}
