const express = require('express');
const app = express();
const morgan = require('morgan');
require("dotenv").config({ path: "../.env"});
const cors = require('cors')
const router = express.Router();
const getConnections = require('./connection');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(8080, function() {
    console.log('Listening on 8080'); 
});


getConnections().connect(function (err){
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to database.")
});


const usuarioRoutes = require("./Routes/Usuario.Routes");
app.use("/usuario", usuarioRoutes);
const productoRoute = require("./Routes/Producto.Routes");
app.use("/producto", productoRoute);

