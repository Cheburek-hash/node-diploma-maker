'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../routes/user.routes');
const config = require('config');
const cors = require('cors');

class Server {
  constructor(){
    this.PORT = config.get('port') || 5000;
    this.ROOT = require('path').dirname(require.main.filename);
    this.app = express();
    

   }
  start = () => {
    this.app.listen(this.PORT, () => {
      console.log(`App listening at http://localhost:${this.PORT}`)
    });
    this.app.use(bodyParser.json());
    this.app.use(cors());
    this.app.use('/api', userRouter);
        
  }
}


module.exports = Server;