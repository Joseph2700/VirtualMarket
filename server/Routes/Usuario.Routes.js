const express = requiere("express")
const router = express.Router()

const UsuarioController = require('../Controllers/Usuario.Controller')

router.get("/getUsuario", UsuarioController.getAllUsuarios)
router.post("/CrearU", UsuarioController.Crear)

module.exports = router;

