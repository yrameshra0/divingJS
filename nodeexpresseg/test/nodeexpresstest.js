var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');

describe('Express Tests', function() {

    it('Hello World', function(done) {
        request(app)
            .get('/')
            .expect(200, 'Hello World from Express \n', done);
    });
});