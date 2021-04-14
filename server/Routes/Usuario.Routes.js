const express = requiere("express")
const router = express.Router()

const UsuarioController = require('../Controllers/Usuario.Controller')

router.get("/usuario", UsuarioController.getAllUsuarios)
router.post("/CrearU", UsuarioController.crear)

module.exports = router;

