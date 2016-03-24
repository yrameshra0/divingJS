var expect = require('chai').expect,
  request = require('supertest'),
  app = require('../src/restifyApp.js');

describe('RESTful Application Tests', function() {
  it('Method Overiding', function(done) {
    request(app)
      .post('/putMethodOverride')
      .set('X-HTTP-Method-Override', 'PUT')
      .expect(200, "Successfully Post redirected to Put", done);
  });
});