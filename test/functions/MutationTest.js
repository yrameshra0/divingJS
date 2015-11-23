var assert = require('chai').assert;
var _ = require('underscore');

describe("Mutation - Side effects", function() {
    var obj = {
        value: 2
    };

    function setValue(obj, value) {
        obj.value = value;

        return obj;
    }

    it("Using setValue", function() {
        var myObj = setValue(obj, 3);
        assert.equal(myObj.value, 3);
    });

    it("Unknowingly Mutated", function() {
        assert.notEqual(obj.value, 2);
    });

});

describe("Mutation - No Side effect ", function() {
    var obj = {
        value: 2
    };

    function setValue(obj, value) {
        var instance = _.extend({}, obj);
        instance.value = value;

        return instance;
    }

    it("Using setValue", function() {
        var myObj = setValue(obj, 3);
        assert.equal(myObj.value, 3);
    });

    it("Not mutated", function() {
        assert.equal(obj.value, 2);
    });

});