const { DataTypes } = require("sequelize");
const { db } = require("./database");

const StoreItems = db.define("StoreItems");
const ItemStores = db.define("ItemStores");


module.exports = {
  StoreItems,
  ItemStores
};
