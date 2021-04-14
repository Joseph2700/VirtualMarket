var db = require("../src/server");
const express = require("express");
const app = express();
const port = process.env.RDS_PORT;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const usuarioRoutes = require("./Routes/Usuario.Routes")
app.use("/usuario", usuarioRoutes)
app.listen(process.env.PORT || 8080, () =>
  console.log(`Server running on port ${process.env.PORT || 8080}`)
);
module.exports = app