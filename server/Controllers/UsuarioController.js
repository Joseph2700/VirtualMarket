const express = require("express")
const usuarioModel = require("../Models/UsuarioModel")

exports.Crear = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "El contenido no puede estar vacio!",
      });
    }
    const nuevoUsuario = new Usuario(
      req.body.NombreUsuario,
      req.body.Contrasena,
    );
    Usuario.Crear(nuevoUsuario, (err, data) => {
      if (err){
        res.status(500).send({
          message:
             err.message || "Ocurrio un Error al crear el usuario."
         });
         console.log(err);
      } else {
        res.send(data);
      }
    });
  };

  exports.getAllUsuario = (req, res) => {
    usuarioModel.getAllUsuario((err, Usuario) => {
      console.log("here");
  
      console.log("Usuarios", Usuario);
      res.send(Usuario);
    });
  };