'use strict';

'use strict';

const SRV = require('./server/server.js');

const server = new SRV();

server.start()

server.get('/', "/public/index.html");


