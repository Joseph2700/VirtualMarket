const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyparser = require('body-parser');
app.use(bodyparser.json());
require("dotenv").config();
const cors = require('cors')
const router = express.Router()

var mysql = require('mysql');
const connections = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE,
    timezone: process.env.RDS_TIMEZONE
});
connections.connect(function (err){
    if (err){
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to database.")
})



app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const usuarioRoutes = require("./Routes/Usuario.Routes")
// app.use("/usuario", usuarioRoutes)

app.listen(8080, function() {
    console.log('Listening on 8080'); 
})
app.get("/usuario", (req, res)=>{
    connections.query("SELECT * FROM virtualmarket.tbl_usuario;", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
      });

})
module.exports = connections;