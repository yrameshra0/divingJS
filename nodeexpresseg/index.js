var express = require('express'),

    // Create an application instance
    app = express(),
    port = process.env.PORT || 44444;


// Adding some data to request object that other middleware and routes can use.
app.use(function(request, response, next) {
    request.foo = 'bar';
    next();
});

app.get('/', function(request, response) {
    response.set('Content-Type', 'text/plain');

    response.end('Hello World from Express \n');
});

app.get(/(crazy|coder)/, function(request, response) {
    var param = request.params[0]; // Whitelisted Parameter
    response.send('Hello ' + param);
});

app.get('/fooit', function(request, response) {
    var param = request.params[0]; // Whitelisted Parameter
    response.send(request.foo);
});

app.get('/desperate', function(request, response, next) {
    try {
        var param = request.bar; // This will thorw an exception
        param.something();

        response.send(request.foo);
    } catch (error) {
        return next(error);
    }
});

app.listen(port, function() {
    console.log('Listening on port ==> ' + port);
});


// Error Handlers for catching un seen consequences
app.use(function(error, request, response, next) {
    console.log(error);

    // Sending out error to callee clients.
    response.status(500).send('Your request was not handled successfully :(');


});
module.exports = app;