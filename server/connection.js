const mysql = require('mysql');

module.exports = () => {
    const connections = mysql.createConnection({
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        port: process.env.RDS_PORT,
        database: process.env.RDS_DATABASE,
        timezone: process.env.RDS_TIMEZONE
    });

    return connections;
}