const { DataTypes } = require("sequelize");
const { db } = require("./database");

const Item = db.define(
  "Item",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Quantity: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    Units: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = { Item };
