var assert = require("chai").assert;
var filter = require("../app/AppendixA");

describe("Example from AppendixA", function() {
    describe("Filter Passing Example", function() {
        it("Lower values should not pass.", function() {
            assert.notOk(filter.highPass(2, 5));
        });
        it("Higher values should pass.", function() {
            assert.ok(filter.highPass(8, 5));
        });
        it("Lower values should pass.", function() {
            assert.ok(filter.lowPass(2, 5));
        });
        it("Higher values should not pass.", function() {
            assert.notOk(filter.lowPass(8, 5));
        });
    });
});