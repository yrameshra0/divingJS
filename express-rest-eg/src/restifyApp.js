var express = require('express'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  errorHandler = require('express-error-handler'),
  assign = require('lodash/object/assign'),
  cuid = require('cuid'),
  app = express(),
  port = 77777,
  albums = [];

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.json());

app.get('/getMethodOverride', function(request, response) {
  response.end("Successfully POST redirected to GET -- " + request.body.foo);
});

app.get('/albums', function(request, response) {
  var index = albums.map(function(album) {
    return {
      href: '/albums' + album.id,
      properties: {
        name: album.name,
        artist: album.artist
      }
    };
  });

  response.send(index);
});

app.post('/albums', function(request, response) {
  var id = cuid(),
    album = assign({}, request.body, {
      id: id
    });

  albums[id] = album;

  response.status(201).send({
    href: '/albums/' + id
  });
});

app.get('/albums/:id', function(request, response, next) {
  var id = request.params.id,
    body = albums[id],
    err;

  if (!body) {
    err = new Error('Album not found');
    err.status = 404;
    return next(err);
  }

  response.status(200).send(body);
});


app.all('/albums/:id', errorHandler.httpError(405));

app.listen(port, function() {
  console.log('Listening on port ==> ' + port);
});

module.exports = app;