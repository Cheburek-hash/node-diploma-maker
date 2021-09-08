'use strict';

const express = require('express')

class Server{
  constructor(port = 3000){
    this.port = port
    this.ROOT = require('path').dirname(require.main.filename)
    this.app = express();
    this.app.use(express.static(`${this.ROOT}/public`)); //static files
  }
  start = () => {
    this.app.listen(this.port, () => {
      console.log(`Example app listening at http://localhost:${this.port}`)
    })
  }
  get = (url, file) => {
    this.app.get(url, (req, res) => {
       res.sendFile(this.ROOT+file)
    });
  }
}

module.exports = Server;