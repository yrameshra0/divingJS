var assert = require('chai').assert,
    passwordAuth = require('../lib/password-auth.js');
describe('Password authentication', function() {
    it('Authentication using credential correct password', function() {
        passwordAuth.verify('username', 'password', function(unknw, user) {
            assert.isNotNull(user);
        });
    });

    it('Authentication using credential incorrect password', function() {
        passwordAuth.verify('username', 'incorrect-password', function(unknw, isValid) {
            assert.notOk(isValid);
        });
    });
});