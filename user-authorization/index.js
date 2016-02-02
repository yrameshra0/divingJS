var express = require('express'),
    app = express(),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    verify = require('./lib/password-auth.js').verify,
    // bodyParser for request body 
    bodyParser = require('body-parser'),
    port = +process.env.PORT || 55555;

app.listen(port, function() {
    console.log('Listening on port ==> ' + port);
});

app.use(passport.initialize());
app.use(bodyParser.json());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new LocalStrategy(verify));

app.post('/login', passport.authenticate('local', {
    failureRedirect: '/someFailureRedirect'
}), function(request, response) {
    response.end();
});

module.exports = app;