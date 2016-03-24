var express = require('express'),
  methodOverride = require('method-override'),
  app = express(),
  port = 77777;

app.use(methodOverride('X-HTTP-Method-Override'));

app.put('/putMethodOverride', function(request, response) {
  response.end("Successfully Post redirected to Put");
});

app.listen(port, function() {
  console.log('Listening on port ==> ' + port);
});


module.exports = app;