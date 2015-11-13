var assert = require('assert');

describe('Pure Functions', function() {
	it('Not Pure Functions -- Due to Mutation', function() {
		function rotate(arr) {
			arr.push(arr.shift());

			return arr;
		};
		var arrToRotate = [1, 2, 3];

		assert.deepEqual(rotate(arrToRotate), [2, 3, 1]);
		assert.notDeepEqual(arrToRotate, [1, 2, 3]); // Indicating that the original arr has be modified in the process of rotation
	});

	it('Pure Function', function(){
		function rotate(arr){
			var newArr = arr.slice(0);
			newArr.push(newArr.shift());

			return newArr;
		}

		var arrToRotate = [1, 2, 3];

		assert.deepEqual(rotate(arrToRotate), [2, 3, 1]);
		assert.deepEqual(arrToRotate, [1, 2, 3]); // Indicating that the original arr is intact
	});
});