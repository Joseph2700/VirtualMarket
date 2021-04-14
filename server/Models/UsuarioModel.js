const connection = require("../server.js")

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
  
  usuario.getAllUsuario = (result) => {
    const sql = `SELECT * FROM usuario;`;
    db.query(sql, (err, res) => {
      if (err) {
        console.log("Hay un error.", err);
        result(null, err);
        return;
      } else {
        console.log("Usuarios encontrados: ");
        result(null, res);
      }
    });
  };
  
  module.exports = usuario;