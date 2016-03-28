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
      .post('/albums/123')
      .expect(405, done);
  });

});

describe('RESTful Album Application', function() {

  var createdAlbumId = 'someId';
  it('GET All Albums', function(done) {
    request(app)
      .get('/albums')
      .expect(200, done);
  });

  it('POST Album', function(done) {
    var album = {
      'name': 'Fitoor',
      'artist': 'Amit Trivedi'
    };

    request(app)
      .post('/albums')
      .send(album)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);

        createdAlbumId = res.body;
        console.log("CreatedAlbumId -- " + JSON.stringify(createdAlbumId));
        done();
      });

  });

  //# Maybe not a good idea to depend on the order of the execution of the test cases here
  it('GET Created Album', function(done) {
    request(app)
      .get(createdAlbumId.href)
      .expect(200, done);
  });

  it('GET Unkown Album By ID ', function(done) {
    request(app)
      .get("/albums/unkownAlbumId")
      .expect(404, done);
  });
});