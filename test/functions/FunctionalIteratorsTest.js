var assert = require("chai").assert;

describe("Using Functional Iterators", function() {
    it("Standard Get Count", function() {
        function getCount() {
            var i,
                count = [1, 2, 3],
                length = count.length,
                text = '';

            for (i = 0; i < length; i++)
                text += count[i] + ' ';

            return text;
        }

        assert.equal(getCount(), "1 2 3 ", "getCount should count to three.");
    });

    it("Functional Iterator Get Count", function() {
        function getCount() {
            var count = [1, 2, 3],
                text = '';

            count.forEach(function(number) {
                text += number + ' ';
            });

            return text;
        }

        assert.equal(getCount(), "1 2 3 ", "getCount should count to three.");
    });

    it("Functional Iterator Avoiding Mutation", function() {
        function getCount() {
            var count = [1, 2, 3];

            return count.reduce(function(previous, number) {
                return previous + number + ' ';
            }, '');
        }

        assert.equal(getCount(), "1 2 3 ", "getCount should count to three.");
    });

    // ES5 Shim Project which helps delivering consistent functioning apis cross browsers.
});