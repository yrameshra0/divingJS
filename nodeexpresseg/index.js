var express = require('express'),

    // Mustache template engine
    hulk = require('hulk-hogan'),

    // Create an application instance
    app = express(),

    // bodyParser for request body 
    bodyParser = require('body-parser'),

    port = +process.env.PORT || 44444;

// Tell express where to find your templates
app.set('views', __dirname + '/views');

// By default, Express will use a generic HTML wrapper (a layout)
// to render all your pages. If you don't need that, turn it off.
app.set('view options', {
    layout: false
});

// Tell express which engine to use
app.set('view engine', 'hulk');

// Specify the extension you'll use for your views
app.engine('.hulk', hulk.__express);

// .bodyParser() parses the request body and creates the request.body object.
app.use(bodyParser.json());

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

app.get('/template', function(request, response) {
    response.render('index', {
        what: 'World'
    });
});

app.post('/bodyparse', function(request, response) {
    response.send(request.body.foo);
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

// static() creates a static file server, which looks for assets in /public directory
app.use(express.static(__dirname + '/public'));
module.exports = app;