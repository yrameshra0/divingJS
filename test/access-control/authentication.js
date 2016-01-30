var assert = require('chai').assert;
var crypto = require('crypto');
var Q = require('Q');

describe('Authentication', function() {

    it('Creating salts for hashing', function() {
        var defer = Q.defer();

        /**
         Crpto creating the Salt of 256 size requires to gather enough entropy
         and hence its given an option of doing this process in an ansynchronus mode
         */
        crypto.randomBytes(256, function(err, buff) {
            defer.resolve(buff.toString('hex').length);
        });

        return Q.all([
            assert.eventually.equal(defer.promise, 512)
        ]);
    });

    it('Password-Based Key Derivation Function 2 PBKDF2', function() {
        var defer = Q.defer();

        /**
         Crpto creating the Salt of 256 size requires to gather enough entropy
         and hence its given an option of doing this process in an ansynchronus mode
         */
        crypto.pbkdf2('secret', 'salt', 100000, 256, function(err, buff) {
            defer.resolve(buff.toString('hex').length);
        });

        return Q.all([
            assert.eventually.equal(defer.promise, 512)
        ]);

    });

    it('Constant Time equality', function() {
        /**
    	Constant equals, compares two strings, x and y with a constant time algorithm,
    	to prevent attacks based on timing statistics.
    	*/
        var constantEquals = function constantEquals(x, y) {
            var result = true,
                length = x.length > y.length ? x.length : y.length,
                i;

            for (i = 0; i < length; i++) {
                if (x.charCodeAt(i) !== y.charCodeAt(i))
                    result = false;
            }

            return result;
        };

        assert.ok(constantEquals("Something", "Something"));
        assert.notOk(constantEquals("Something", "Something Else"));
    });
});