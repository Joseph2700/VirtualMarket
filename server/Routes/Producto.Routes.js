const express = requiere("express")
const router = express.Router()

const productoController =  require("../Controllers/Producto.Controller")
router.get("/productos", productoController.getAllProductos)
module.exports = router;