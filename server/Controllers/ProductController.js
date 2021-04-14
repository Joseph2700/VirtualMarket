const Producto = require("../Models/ProductoModel");

exports.getItems = (req, res) => {
    Producto.get((err, items) => {
        if (err) {
            res.send(err);
        }
        console.log('Articulos', items);
        res.send(items)
    });
}