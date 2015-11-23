require('mocha-as-promised');
var chaiAsPromised = require('chai-as-promised');
var chai = require('chai');

chai.use(chaiAsPromised);
var assert = chai.assert;

var Q = require('Q');

describe('Asynchronus Functions Handling', function() {

    it('Callback Passing Approach', function() {
        var firstDelay = 1,
            finalDelay = 2;

        function callbackToBeInnvoked() {
            // console.log('Callback Called');
        }

        function asynOperationFunction(fn) {
            setTimeout(function async() {
                fn.call();
            }, firstDelay);
        }

        asynOperationFunction(callbackToBeInnvoked);

        setTimeout(function asserting() {
            // console.log('After Final Delay');
        }, finalDelay);
    });

    it('Promise Handling', function() {
        var defer = Q.defer();
        setTimeout(function() {
            defer.resolve(2);
        }, 10);

        return Q.all([
            assert.equal(0, 0),
            assert.eventually.equal(defer.promise, 2),
            assert.eventually.notEqual(defer.promise, 0)
        ]);
    });
});