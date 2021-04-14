const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
require("dotenv").config();

var mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE,
    timezone: process.env.RDS_TIMEZONE
});
connection.connect(function (err){
    if (err){
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to database.")
})

app.listen(8080, function() {
    console.log('Listening on 8080'); 
})

app.get('/home', function(req, res) {
    res.send('Bravo Six, going dark');
})

module.exports = connection;