const db = require('../server');

const Producto = function(categoria, nombre, cantidad, precio){
    this.Categoria = categoria;
    this.Nombre = nombre;
    this.cantidad = cantidad;
    this.Precio = precio;
}

Producto.get = (result) => {
    db.query('SELECT * FROM Articulo', (err, res)=>{
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