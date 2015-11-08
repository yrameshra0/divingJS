var assert = require('chai').assert;

describe("Function Declaration Tests", function () {

  it("Function Expression", function () {
    var bar = function () {
      return "foo";
    };

    assert.equal(bar(), 'foo');
    /**
    bar(); => [Function] (Note: It's anonymous)
    This bar(), assigns function body to an variable, bar. This implementation is called a function expression
    */
  });

  it("Conditional Functional Expression", function () {
    var grade, score = 4;

    if (score > 5) {
      grade = function () {
        return "pass";
      };
    } else {
      grade = function () {
        return "fail";
      };
    }

    assert.equal(grade(), "fail");
  });

  it("Method Literals", function () {
    /**
    Functions expression assigned to objects literals are sometimes called as method literals.
    Methods are functions attached to objects. They make it very easy to group related functions.
    */
    var lightBulb = {
      off: function () {
        return "off";
      },
      on: function () {
        return "on";
      },
      blink: function () {
        return "blink";
      }
    };

    assert.equal(lightBulb.blink(), "blink", "Syntactic verification");
  });

  it("Named Function Expression", function () {
    /**
    Named function expression are like anonymous functions expressions in every way, except that they have name that we
    can use from inside function for purpose of recurion
    */
    var a = function x() {
      assert.ok(x, "x() is usable inside function");
    };

    a();
    try {
      x();
    } catch (e) {
      assert.ok(true, "x() is undefined outside the function.");
    }
  });

  it("Lamda", function () {
    /**
    Lamda is a function that is used as data.
    */
    var sum = function () {
      var result = 0;
      [5, 5, 5].forEach(function addTo(number) {
        result += number;
      });

      return result;
    };

    assert.equal(sum(), 15);
  });
});
