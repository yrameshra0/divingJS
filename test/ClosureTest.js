var assert = require('chai').assert;
/**
In nutshell closure stores function state even after the function has returned. This technique is commonly used to give
objects data privacy
*/
describe("Access through Closure ", function() {
  it("Closure Object Privacy", function() {
    var o = function o() {
      var data = 1,
        get;

      get = function get() {
        return data;
      };

      return {
        get: get
      };
    };
    var obj = o();
    try {
      assert.ok(obj.data, 'This throws error');
    } catch (e) {
      assert.ok(true, 'The data var is only available to priviledged methods');
    }

    assert.equal(obj.get(), 1, ".get() should have access to the closure");
  });

  it("Closure with setTimeout", function() {
    (function() {
      var arr = [],
        count = 1,
        delay = 1,
        timer,
        complete;

      timer = function timer() {
        setTimeout(function inner() {
          arr.push(count);

          if (count < 3) {
            count += 1;
            timer();
          } else {
            complete();
          }
        }, delay);
      };
      complete = function complete() {
        assert.equal(arr.join(',', '1,2,3, 4'));
      };

      timer();
      assert.ok(arr.length === 0);
    }());
    /**
    The test case would be more ideal if the assert inside `complete` is executed using chai-as-promised, but I guess
    it will take time for that to happen
    Though the main things getting tested here are :
    1) inner() lambda has access to `count`, `compelete()` and `arr` from the containing function
    2)
    */
  });
});
