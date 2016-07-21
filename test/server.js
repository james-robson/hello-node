'use strict';
let expect  = require('chai').expect;
let request = require('request');
let server = require('../app/server');

describe('Hello World Server', function () {
    before(function () {
        server.listen(8080);
    });

    after(function () {
        server.close();
    });
    describe('Hello World Endpoint', function () {
        let url = 'http://localhost:8080';

        it('returns status 200', function (done) {
            request(url, function (error, response) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('returns expected string in response body', function (done) {
            request(url, function (error, response, body) {
                expect(body).to.equal('Hello World!');
                done();
            });
        });
    });
});
