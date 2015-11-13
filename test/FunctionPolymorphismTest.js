var assert = require('chai').assert;

describe("Functional Polymorphism", function() {

	it("Arguments Sorting", function() {
		function sort() {
			// `arguments` is not real array, it doesn't have `.sort()` method available with it
			var args = [].slice.call(arguments, 0);

			return args.sort();
		}

		assert.deepEqual(sort('b', 'c', 'a'), ['a', 'b', 'c']);
	});

	it("Polymorphic Branching", function() {
		function morph(options) {
			var args = [].slice.call(arguments, 0),
				animals = 'turtles';

			if (typeof options === 'string') {
				animals = options;
				args.shift();
			}

			return 'The pet store has ' + args + ' ' + animals;
		}
		var test1 = morph('cats', 3),
			test2 = morph('dogs', 2),
			test3 = morph(3);

		assert.equal(test1, 'The pet store has 3 cats');
		assert.equal(test2, 'The pet store has 2 dogs');
		assert.equal(test3, 'The pet store has 3 turtles');
	});

});