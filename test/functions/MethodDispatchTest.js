var assert = require('chai').assert;

describe("Dynamic Dispatch", function() {
    it("Method Dispatch", function() {
        var methods = {
            init: function init(args) {
                return 'initialized ...';
            },
            hello: function hello(args) {
                return 'Hello ' + args;
            },
            goodbye: function goodbye(args) {
                return 'Goodbye! cruel ' + args;
            }
        };

        function greet(options) {
            var args = [].slice.call(arguments, 0),
                initialized = false,
                action = 'init';

            if (typeof options === 'string' &&
                typeof methods[options] === 'function') {

                action = options;
                args.shift();
            }

            return methods[action](args);
        }

        var test1 = greet('hello', 'world'),
            test2 = greet('goodbye', 'world'),
            test3 = greet('something');

        assert.equal(test1, 'Hello world');
        assert.equal(test2, 'Goodbye! cruel world');
        assert.equal(test3, 'initialized ...');

    });
});