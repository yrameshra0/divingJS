var assert = require('chai').assert;

describe("Generic Collections Handling", function() {
	it("Ad-Hoc Conditional Branching", function() {
		var toArray = function toArray(obj) {
			var arr = [],
				prop;

			for (prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					arr.push(prop);
				}
			}

			return arr;
		};

		var randomItem = function randomItem(collection) {
			var arr = ({}.toString.call(collection) !== '[object Array]') ? toArray(collection) : collection;

			return arr[Math.floor(arr.length * Math.random())];
		};

		var obj = {
				a: 'a',
				b: 'b',
				c: 'c'
			},
			arr = ['a', 'b', 'c'];

		assert.ok(obj.hasOwnProperty(randomItem(obj)));
		assert.ok(obj.hasOwnProperty(randomItem(arr)));
	});

	it("Collection Polymorphism", function() {
		var validString = 'abc',
			invalidString = 'abcd',

			validArray = ['a', 'b', 'c'],
			invalidArray = ['a', 'b', 'c', 'd'],

			isValid = function isValid(char) {
				return validString.indexOf(char) >= 0;
			};

		assert.notOk([].every.call(invalidString, isValid));
		assert.notOk([].every.call(invalidArray, isValid));

		assert.ok([].every.call(validString, isValid));
		assert.ok([].every.call(validArray, isValid));
	});


	it("Collection Polymorphism with numbers", function() {
		var num = 303;
		var i = ''.indexOf.call(num, 0);

		assert.ok(i === 1);
	});
});