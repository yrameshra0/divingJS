var express = require('express'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  app = express(),
  port = 77777;

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(bodyParser.json());

app.get('/getMethodOverride', function(request, response) {
  response.end("Successfully POST redirected to GET -- " + request.body.foo);
});

app.listen(port, function() {
  console.log('Listening on port ==> ' + port);
});


module.exports = app;