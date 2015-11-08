var assert = require('chai').assert;

describe("Method Context", function() {
  it("Method Invocation", function() {
    function highPass(number, cutOff) {
      cutOff = cutOff || this.cutOff;
      return number >= cutOff;
    }

    var filter1 = {
        highPass: highPass,
        cutOff: 5
      },
      filter2 = {
        //No High Pass here
        cutOff: 3
      };
    var result = highPass(6, 5);
    assert.equal(result, true, "6 > 5 should be true.");

    var result1 = filter1.highPass(3),
      result2 = highPass.call(filter2, 3), // Inherited from Function.prototype
      result3 = filter1.highPass(6);

    assert.equal(result1, false, "3 > 5 should be false.");
    assert.equal(result2, true, "3 >= filter2.cutOff{3} should be true.");
    assert.equal(result3, true, "6 >= 5 should be true.");

  });
});
