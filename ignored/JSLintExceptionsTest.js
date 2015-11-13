var assert = require('chai').assert;

describe("Best Practices Quick Reference", function() {
    it('Missing Semicolon before +', function() {
        var a = 1 + 1 + '3';
        assert.equal(a, 2);
    });

    it("Missing Semicolon before [", function() {
        var b = 1 + 1[1, 1].forEach(function(num) {
            b += num;
        });
        assert.equal(b, 4);
    });

    it("Mising Semicolon before (", function() {
        var x = 1,
            f = function f() {
                assert.ok(false, "This test should not run");
            }
            (function() {
                /* Do something interesting */
            }());
    });

    it("Always use var (tests without var)", function() {
        var add = function add(number) {
            x = 2;
            return number + 2;
        };

        assert.equal(add(2), 4, 'add() should add 2 to whatever you pass in')
        assert.ok(!x, 'x should not pollute the global scope.');
    });

    it("Always use var (test with var)", function() {
        var add = function add(number) {
            var y = 2;
            return number + 2;
        };

        assert.equal(add(2), 4, 'add() should add 2 to whatever you pass in')
        // Fails because its generally not in scope
        // assert.fail(!y, 'y should not pollute the global scope.');
    });
});