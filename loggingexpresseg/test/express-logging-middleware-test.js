var expect = require('chai').expect,
  request = require('supertest'),
  app = require('../express-with-logging-middleware');

describe('Logging Express Tests', function() {

  it('Log using GIF', function(done) {
    request(app)
      .get('/log.gif')
      .expect(200, done);
  });

  it('Error Logging', function(done) {
    request(app)
      .get('/error')
      .expect(500, done);
  });
});