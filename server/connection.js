const sql = require('mssql');
//module.exports = () => {
//    const connections = mysql.createConnection({
//        host: process.env.RDS_HOSTNAME,
//        user: process.env.RDS_USERNAME,
//        password: process.env.RDS_PASSWORD,
//        port: process.env.RDS_PORT,
//        database: process.env.RDS_DATABASE,
//        timezone: process.env.RDS_TIMEZONE
//    });

//    return connections;
//}

const config = {
	user: "sqlserver", 
	password: "Virtualmarket01", 
	server: "35.229.21.228", 
	database: "Virtualmarket",
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