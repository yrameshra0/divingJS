var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index');

describe('Passport Tests', function() {

    it('Successful Passport Login', function(done) {
        var data = {
            username: 'username',
            password: 'password'
        };
        request(app)
            .post('/login')
            .send(data)
            .expect(200, done);
    });

    it('UnSuccessful Passport Login', function(done) {
        var data = {
            username: 'username',
            password: 'wrong-password'
        };
        request(app)
            .post('/login')
            .send(data)
            .expect(302, done);
    });
});