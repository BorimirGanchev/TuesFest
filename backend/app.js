const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const Middleware = require("./middleware");
const routes = require("./router/router");
const db_connection = require("./db/connect-db");

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

const start = async () => {
  try {
    await db_connection(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("server is listening on port " + port);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
