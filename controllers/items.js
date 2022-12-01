const { Item } = require("../models/item");

const getItems = async (req, res, next) => {
  let items;
  try {
    items = await Item.findAll();
  } catch (e) {
    res.status(401).json({
      message: "unable to find items",
      error: e,
    });
    return;
  }

  res.json(items);
};

const getItem = async (req, res, next) => {
  let itemID = req.params.id;

  let item;
  try {
    item = await Item.findByPk(itemID);
  } catch (e) {
    res.status(404).json({
      message: "unable to find item with that id",
      error: e,
    });
    return;
  }

  res.json(item);
};

const createItem = async (req, res, next) => {
  const { id, name, quantity, units, } =
    req.body;

  let item;
  try {
    item = await Item.create({
      id,
      name,
      quantity,
      units,
    });
  } catch (e) {
    res.status(422).json({
      message: "error creating item in database",
      error: e,
    });
    return;
  }

  res.status(201).json({
    id: item.id,
    message: "item created successfully",
  });
};

const updateItem = async (req, res, next) => {
  const itemID = req.params.id;

  let item;
  try {
    item = await Item.findByPk(itemID);
  } catch (e) {
    res.status(404).json({
      message: "unable to find item with that id",
      error: e,
    });
    return;
  }

  const {
      id,
      name,
      quantity,
      units,
  } = req.body;

  let itemData = {
      id,
      name,
      quantity,
      units,
  };

  try {
    await item.update(itemData);
  } catch (e) {
    console.log(e);
    res.status(422).json({
      message: "unable to update item with that id",
      error: e,
    });
    return;
  }

  res.json(item);
};

const deleteItem = async (req, res, next) => {
  const itemID = req.params.id;

  let item;
  try {
    item = await Item.findByPk(itemID);
  } catch (e) {
    res.status(404).json({
      message: "unable to find item with that id",
      error: e,
    });
    return;
  }

  try {
    await item.destroy();
  } catch (e) {
    res.status(422).json({
      message: "unable to delete item with that id",
      error: e,
    });
    return;
  }

  res.status(204);
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
