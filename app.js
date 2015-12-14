var Hapi = require('hapi');
var path = require('path');
var Inert = require('inert');


// Create a server with a host and port
var server = new Hapi.Server();
server.register(Inert, function () {});
server.connection({
    port: 8082
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            index: true
        }
    }
});

server.start(function (err) {

    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});
