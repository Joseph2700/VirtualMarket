const getConnection = require("../connection");

var Usuario = function(uNombreUsuario, uContrasena){
    this.NombreUsuario = uNombreUsuario,
    this.Contrasena = uContrasena
}

Usuario.Crear = (newUser, result) => {
    getConnection().query(`call InsertarUsuario( "?", "?");` [newUser, result], true, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Usuario creado exitosamente");
    });
};
  
    Usuario.getAllUsuario = (result) => {
        getConnection().query("SELECT * FROM virtualmarket.tbl_usuario;", function (err, res, fields) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        console.log(result);
        result(null, res);
    });
};
  
  
  module.exports = Usuario;