/****
* ROOT FILE
****/

const server = require('./Configs/app')();
const config = require('./Configs/Config/config');
const db = require('./Configs/db');

//create the basic server
server.create(config, db);

//starts server
server.start();
