const { Store } = require("../models/store");

const getStores = async (req, res, next) => {
  let stores;
  try {
    stores = await Store.findAll();
  } catch (e) {
    res.status(401).json({
      message: "unable to find stores",
      error: e,
    });
    return;
  }

  res.json(stores);
};

const getStore = async (req, res, next) => {
  let storeID = req.params.id;

  let store;
  try {
    store = await Store.findByPk(storeID);
  } catch (e) {
    res.status(404).json({
      message: "unable to find item with that id",
      error: e,
    });
    return;
  }

  res.json(store);
};

const createStore = async (req, res, next) => {
  const { id, name,} =
    req.body;

  let store;
  try {
    store = await Store.create({
      id,
      name,
    });
  } catch (e) {
    res.status(422).json({
      message: "error creating store in database",
      error: e,
    });
    return;
  }

  res.status(201).json({
    id: store.id,
    message: "store created successfully",
  });
};

const updateStore = async (req, res, next) => {
  const storeID = req.params.id;

  let store;
  try {
    store = await Store.findByPk(storeID);
  } catch (e) {
    res.status(404).json({
      message: "unable to find store with that id",
      error: e,
    });
    return;
  }

  const {
    id,
    name,
  } = req.body;

  let storeData = {
    id,
    name,
  };

  try {
    await store.update(storeData);
  } catch (e) {
    console.log(e);
    res.status(422).json({
      message: "unable to update store with that id",
      error: e,
    });
    return;
  }

  res.json(store);
};

const deleteStore = async (req, res, next) => {
  const storeID = req.params.id;

  let store;
  try {
    store = await Store.findByPk(storeID);
  } catch (e) {
    res.status(404).json({
      message: "unable to find store with that id",
      error: e,
    });
    return;
  }

  try {
    await store.destroy();
  } catch (e) {
    res.status(422).json({
      message: "unable to delete store with that id",
      error: e,
    });
    return;
  }

  res.status(204);
};

module.exports = { getStore, getStores, createStore, updateStore, deleteStore };
