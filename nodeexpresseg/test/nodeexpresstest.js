var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');

describe('Express Tests', function() {

    it('Retrieve Index Page', function(done) {
        request(app)
            .get('/')
            .expect(200, 'Hello World from Express \n', done);
    });

    it('Retrieve Whitelisted Page (Regex Test - 1)', function(done) {
        request(app)
            .get('/crazy')
            .expect(200, 'Hello crazy', done);
    });

    it('Retrieve Whitelisted Page (Regex Test - 2)', function(done) {
        request(app)
            .get('/coder')
            .expect(200, 'Hello coder', done);

    });

    it('Retrieve Whitelisted Page (Regex Test - 3)', function(done) {
        request(app)
            .get('/crazilycoding')
            .expect(404, done);

    });

    it('Middleware processing and forwarding', function(done) {
        request(app)
            .get('/fooit')
            .expect(200, 'bar', done);
    });

    it('Error reporting to callee apps', function(done) {
        request(app)
            .get('/desperate')
            .expect(500, 'Your request was not handled successfully :(', done);
    });
});