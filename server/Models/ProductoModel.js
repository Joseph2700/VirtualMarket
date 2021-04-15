const getConnection = require('../connection');

const Producto = function(categoria, nombre, cantidad, precio){
    this.Categoria = categoria;
    this.Nombre = nombre;
    this.cantidad = cantidad;
    this.Precio = precio;
}

Producto.get = (result) => {
    getConnection().query('SELECT * FROM virtualmarket.tbl_producto', function (err, res){
        if (err) {
            console.log("Error while fetching all items", err);
            result(null, err);
        }
        else {
            console.log('Employees fetched succesfully');
            result(null, res);
        }
    });
}

module.exports = Producto;