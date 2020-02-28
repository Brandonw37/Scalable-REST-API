/*
* server configuration file
*/

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

module.exports = function() {
    let server = express(),
    create,
    start;

    create = (config,db) => {
        let routes = require('../Routes');
        //set all the servers
        server.set('env', config.env);
        server.set('port',config.port);
        server.set('hostname',config.hostname);

        //add middleware to parse JSON
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({
            extended: false
        }));
        
        //connect to Database
        mongoose.connect(
            db.database,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true
            }
        );
        
        //set up routes
        routes.init(server);
    };

    start = ()=> {
        let hostname = server.get('hostname'),
            port = server.get('port');
            server.listen(port, function() {
                console.log('Express server listening on - http://' + hostname + ':' + port);
            });
    };
    return {
        create: create,
        start: start
    };
};