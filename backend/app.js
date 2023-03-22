const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const Middleware = require("./middleware");
const routes = require("./routes");

//
//
// requiremmnts
//
//

app.use(cors());
app.use(express.json());
app.use(Middleware.decodeToken);

//
//
//middleware
//
//

const port = process.env.PORT || 3000;

const start = () => {
  app.listen(port, () => {
    console.log("server is listening on port " + port);
  });
};

start();
