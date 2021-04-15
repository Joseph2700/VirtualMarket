const connection = require("../server.js")
const db = require("../server.js")

var usuario = function(
    uNombreUsuario,
    uContrasena
){
    this.NombreUsuario = uNombreUsuario,
    this.Contrasena = uContrasena
}

usuario.Crear = (newUser, result) => {
    connection.query(`call InsertarUsuario( "?", "?");`
      [newUser, result]  
    , true, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Usuario creado exitosamente");
    });
  };
  
  // usuario.getAllUsuario = (result) => {
  //   db.query("SELECT * FROM virtualmarket.tbl_usuario;", function (err, result, fields) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // };
  

  
  module.exports = usuario;