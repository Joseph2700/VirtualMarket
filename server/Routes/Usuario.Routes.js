const express = require("express")
const router = express.Router()

const UsuarioController = require('../Controllers/UsuarioController')

router.get("/getUsuario", UsuarioController.getAllUsuario)
router.post("/CrearU", UsuarioController.Crear)

module.exports = router;

