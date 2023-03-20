const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const start = () => {
  app.listen(port, () => {
    console.log("server is listening on port " + port);
  });
};

start();
