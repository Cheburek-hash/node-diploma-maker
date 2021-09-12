'use strict';
const Pool = require('pg').Pool;



const pool = new Pool({

    user: process.env.USER_POSTGERS,
    password: process.env.PASSWORD_POSTGRES,
    host: process.env.HOST_POSTGRES,
    port: Number(process.env.PORT_POSTGRES),
    database: process.env.DBNAME_POSTGRES

});




module.exports = pool;