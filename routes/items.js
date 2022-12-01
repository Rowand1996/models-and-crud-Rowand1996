const express = require("express");
const {
  getItems,
  createItem,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/items");

const router = express.Router();

// "/" handlers
router.route("/").get(getItems).post(createItem);

// "/:id" handlers
router.route("/:id").get(getItem).put(updateItem).delete(deleteItem);

module.exports = router;
