var assert = require("chai").assert;

describe("Hoisting Examples", function() {
    it("Function declaration Hoisting", function() {
        function number() {
            return 1;
        }

        (function() {
            assert.equal(number(), 2, "Inner scope wins");

            function number() {
                return 2;
            }
        }());

        assert.equal(number(), 1, "Outer scope still works.");
    });

    it("Function declaration hoisted", function() {
        function number() {
            return 1;
        }

        (function() {
            function number() {
                return 2;
            }

            assert.equal(number(), 2, "Inner scope wins.");
        }());

        assert.equal(number(), 1, "Outer scope still works.");
    });

    it("Function expression hoisting", function() {
        function number() {
            return 1;
        }

        (function() {
            try {
                number();
            } catch (e) {
                assert.ok(true, "number() is undefined.");
            }

            var number = function number() {
                return 2;
            };

            assert.equal(number(), 2, "number() is defined now.");
        }());

        assert.equal(number(), 1, "Outer scope still works.");
    });

    it("Function expression hoisted", function() {
        function number() {
            return 1;
        }

        (function() {
            var number; //Declaration initialized to undefined
            try {
                number();
            } catch (e) {
                assert.ok(true, "number() is undefined.");
            }

            number = function number() {
                return 2;
            };

            assert.equal(number(), 2, "number() is defined now.");
        }());

        assert.equal(number(), 1, "Outer scope still works.");
    });
});