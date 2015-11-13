var assert = require('chai').assert;

describe('Partial Functions', function() {
	/**
	Partial Functions wraps a function that takes multiple arguments and returns a function that takes fewer arguments.
	It uses closures to fix one or more arguments so that you only supply arguments that are unknown.
	*/
	it('Extending Function', function() {
		var multiply = function multiply(x, y) {
				return x * y;
			},
			partial = function partial(fn) {
				// Drop the function from the argument list and fix the arguments in the closure
				var args = [].slice.call(arguments, 1);

				// Return a new function with fixed arguments
				return function() {
					// Combine fixed arguments with the new arguments and call fn with them
					var combinedArgs = args.concat([].slice.call(arguments));

					return fn.apply(this, combinedArgs);
				};
			},
			double = partial(multiply, 2);

		assert.equal(double(4), 8);
	});
});
