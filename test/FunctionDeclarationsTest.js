var assert = require('chai').assert;

describe("Function Declaration Tests", function() {

    it("Function Expression", function() {
        var bar = function() {
            return "foo";
        };

        assert.equal(bar(), 'foo');
        /**
    bar(); => [Function] (Note: It's anonymous)
    This bar(), assigns function body to an variable, bar. This implementation is called a function expression
    */
    });

    it("Conditional Functional Expression", function() {
        var grade, score = 4;

        if (score > 5) {
            grade = function() {
                return "pass";
            };
        } else {
            grade = function() {
                return "fail";
            };
        }

        assert.equal(grade(), "fail");
    });

    it("Method Literals", function() {
        /**
    Functions expression assigned to objects literals are sometimes called as method literals.
    Methods are functions attached to objects. They make it very easy to group related functions.
    */
        var lightBulb = {
            off: function() {
                return "off";
            },
            on: function() {
                return "on";
            },
            blink: function() {
                return "blink";
            }
        };

        assert.equal(lightBulb.blink(), "blink", "Syntactic verification");
    });

    it("Named Function Expression", function() {
        /**
    Named function expression are like anonymous functions expressions in every way, except that they have name that we
    can use from inside function for purpose of recursion
    */
        var a = function x() {
            assert.ok(x, "x() is usable inside function");
        };

        a();
        try {
            x();
        } catch (e) {
            assert.ok(true, "x() is undefined outside the function.");
        }
    });

    it("Lambda", function() {
        /**
    Lambda is a function that is used as data.
    */
        var sum = function() {
            var result = 0;
            [5, 5, 5].forEach(function addTo(number) {
                result += number;
            });

            return result;
        };

        assert.equal(sum(), 15);
        /**
    Lambdas in Javascript are commonly used to :
    1) Performing operations on other arguments passed in
    2) Attaching event handlers for DOM interactions
    2) Pass in a callback function to be executed when the current function is complete
    3) Wrap existing functions with additional functionality (often used to implement cross-cutting concerns, such as
        logging). A Function that adds functionality to another function is called function decorator.
    4) Take a function that requires multiple parameters, and return a function that requires fewer parameters --
        for example by fixing one or more of the parameters to specific values.
    5) Return a function from another function. For example, you might have a function that takes an argument and
        returns a curried function that applies that argument in a predetermined calculation

    • Function anonymity is merely syntactic sugar for lambdas, designed to make them less verbose and easier to work with.
    • A closure is created when an function references data that is contained outside the function scope.
    • Higher order functions are functions that consume or return function as data. Lambdas get passed to and/or
      returned from higher order functions. A function might be both an lambda and a higher order function, but not all
      higher order functions are lambdas.

    */
    });
});