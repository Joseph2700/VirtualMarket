const express = require("express")
const router = express.Router()

const productoController =  require("../Controllers/ProductController")
router.get("/productos", productoController.getItems);

module.exports = router;