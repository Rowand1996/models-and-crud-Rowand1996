const express = require("express");
const {
  getStore,
  getStores,
  createStore,
  updateStore,
  deleteStore,
} = require("../controllers/stores");

const router = express.Router();

// "/" handlers
router.route("/").get(getStores).post(createStore);

// "/:id" handlers
router.route("/:id").get(getStore).put(updateStore).delete(deleteStore);

module.exports = router;
