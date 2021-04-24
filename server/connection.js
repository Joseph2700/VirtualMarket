const sql = require('mssql');
require("dotenv").config({ path: "../.env" });

const config = {
	user: process.env.RDS_USERNAME, 
	password: process.env.RDS_PASSWORD, 
	server: process.env.RDS_HOSTNAME, 
	database: process.env.RDS_DATABASE,
};


sql.connect(config, function (err){
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to database.")
});
const connection = new sql.ConnectionPool(config)
module.exports = connection;