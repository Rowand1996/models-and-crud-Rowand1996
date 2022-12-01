const { Item } = require("./item");
const { Store } = require("./store")
const { User } = require("./user");

const {
  StoreItems,
  ItemStores
} = require("./associations");

async function syncModels() {
  await setupAssociations();

  
  await User.sync({ alter: true });
  await Item.sync({ alter: true });
  await Store.sync({ alter: true });

  
  await StoreItems.sync({ alter: true });
  await ItemStores.sync({ alter: true });
}

async function setupAssociations() {
  Store.belongsToMany(Item, { through: ItemStores });
  Item.belongsToMany(Store, { through: StoreItems });
}

module.exports = {
  syncModels,
  User,
  Item,
  Store,
  StoreItems,
  ItemStores,
};
