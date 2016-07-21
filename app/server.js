/* global exports*/
'use strict';

let http = require('http');

let handleRequest = function (request, response) {
    response.writeHead(200);
    response.end('Hello World!');
};

this.server = http.createServer(handleRequest);

exports.listen = function () {
    this.server.listen(...arguments);
};

exports.close = function (callback) {
    this.server.close(callback);
};
