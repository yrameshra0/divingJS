var expect = require('chai').expect,
  request = require('supertest'),
  app = require('../src/restifyApp.js');

describe('RESTful Application Tests', function() {
  it('Method Overiding', function(done) {
    var data = {
      foo: "bar"
    };
    request(app)
      .post('/getMethodOverride')
      .send(data)
      .set('X-HTTP-Method-Override', 'GET')
      .expect(200, "Successfully POST redirected to GET -- bar", done);
  });

  it("Method Not Allowed at place of Not Found", function(done) {
    request(app)
      .put('/getMethodOverride')
      .expect(405, done);
  });
});