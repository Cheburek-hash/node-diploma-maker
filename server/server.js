"use strict";
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("../routes/user.routes");
const authRouter = require("../routes/auth.routes");
const cors = require("cors");

class Server {
  constructor() {
    this.PORT = process.env.PORT || 5000;
    this.ROOT = require("path").dirname(require.main.filename);
    this.app = express();
  }
  start = () => {
    this.app.listen(this.PORT, () => {
      console.log(`App listening at http://localhost:${this.PORT}`);
    });
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use("/api", userRouter);
    this.app.use("/api", authRouter);
  };
}

module.exports = Server;
