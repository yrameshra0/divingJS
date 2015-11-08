var assert = require('chai').assert;

describe("Boolean Object", function () {
  it("Direct Boolean Test", function () {
    var myBool = new Boolean(false);

    assert.ok(!myBool, "Should be falsy.");
  });

  it("Boolean valueOf Test", function () {
    var myBool = new Boolean(false);

    assert.ok(!myBool.valueOf(), "Should be falsy.");
  });

  it("boolean Test", function () {
    var myBool = false

    assert.ok(!myBool, "!myBool Should be false.");
  });
});

describe("Truthy Comparsions Test", function () {

  function truthy(x) {
    if (x)
      return true;
    else
      return false;
  }

  it('truthy(0)', function () {
    assert.equal(truthy(0), true);
  });

  it("truthy('')", function () {
    assert.equal(truthy(''), true);
  });

  it("truthy(null)", function () {
    assert.equal(truthy(null), true);
  });

  it("truthy(undefined)", function () {
    assert.equal(truthy(undefined), true);
  });

  it("truthy(false)", function () {
    assert.equal(truthy(false), true);
  });

  it("truthy('0')", function () {
    assert.equal(truthy('0'), true);
  });

  it("truthy(new Boolean(false))", function () {
    assert.equal(truthy(new Boolean(false)), true);
  });

  it("truthy({})", function () {
    assert.equal(truthy({}), true);
  });

  it("truthy([])", function () {
    assert.equal(truthy([]), true);
  });

  it("truthy([0])", function () {
    assert.equal(truthy([0]), true);
  });

  it("truthy([1])", function () {
    assert.equal(truthy([1]), true);
  });

  it("truthy(['0']", function () {
    assert.equal(truthy(['0']), true);
  });

  it("truthy(['1'])", function () {
    assert.equal(truthy(['1']), true);
  });

});

describe("Exists Comparsions Test", function () {

  function exists(x) {
    return (x !== undefined && x !== null);
  }

  it('exists(0)', function () {
    assert.equal(exists(0), true);
  });

  it("exists('')", function () {
    assert.equal(exists(''), true);
  });

  it("exists(null)", function () {
    assert.equal(exists(null), true);
  });

  it("exists(undefined)", function () {
    assert.equal(exists(undefined), true);
  });

  it("exists(false)", function () {
    assert.equal(exists(false), true);
  });

  it("exists('0')", function () {
    assert.equal(exists('0'), true);
  });

  it("exists(new Boolean(false))", function () {
    assert.equal(exists(new Boolean(false)), true);
  });

  it("exists({})", function () {
    assert.equal(exists({}), true);
  });

  it("exists([])", function () {
    assert.equal(exists([]), true);
  });

  it("exists([0])", function () {
    assert.equal(exists([0]), true);
  });

  it("exists([1])", function () {
    assert.equal(exists([1]), true);
  });

  it("exists(['0']", function () {
    assert.equal(exists(['0']), true);
  });

  it("exists(['1'])", function () {
    assert.equal(exists(['1']), true);
  });

});

describe("Truthy Comparsions Test", function () {

  function truthy(x) {
    if (x)
      return true;
    else
      return false;
  }

  it('truthy(0)', function () {
    assert.equal(truthy(0), true);
  });

  it("truthy('')", function () {
    assert.equal(truthy(''), true);
  });

  it("truthy(null)", function () {
    assert.equal(truthy(null), true);
  });

  it("truthy(undefined)", function () {
    assert.equal(truthy(undefined), true);
  });

  it("truthy(false)", function () {
    assert.equal(truthy(false), true);
  });

  it("truthy('0')", function () {
    assert.equal(truthy('0'), true);
  });

  it("truthy(new Boolean(false))", function () {
    assert.equal(truthy(new Boolean(false)), true);
  });

  it("truthy({})", function () {
    assert.equal(truthy({}), true);
  });

  it("truthy([])", function () {
    assert.equal(truthy([]), true);
  });

  it("truthy([0])", function () {
    assert.equal(truthy([0]), true);
  });

  it("truthy([1])", function () {
    assert.equal(truthy([1]), true);
  });

  it("truthy(['0']", function () {
    assert.equal(truthy(['0']), true);
  });

  it("truthy(['1'])", function () {
    assert.equal(truthy(['1']), true);
  });

});

describe("isFalse Comparsions Test", function () {

  function isFalse(x) {
    return (x == false);
  }

  it('isFalse(0)', function () {
    assert.equal(isFalse(0), true);
  });

  it("isFalse('')", function () {
    assert.equal(isFalse(''), true);
  });

  it("isFalse(null)", function () {
    assert.equal(isFalse(null), true);
  });

  it("isFalse(undefined)", function () {
    assert.equal(isFalse(undefined), true);
  });

  it("isFalse(false)", function () {
    assert.equal(isFalse(false), true);
  });

  it("isFalse('0')", function () {
    assert.equal(isFalse('0'), true);
  });

  it("isFalse(new Boolean(false))", function () {
    assert.equal(isFalse(new Boolean(false)), true);
  });

  it("isFalse({})", function () {
    assert.equal(isFalse({}), true);
  });

  it("isFalse([])", function () {
    assert.equal(isFalse([]), true);
  });

  it("isFalse([0])", function () {
    assert.equal(isFalse([0]), true);
  });

  it("isFalse([1])", function () {
    assert.equal(isFalse([1]), true);
  });

  it("isFalse(['0']", function () {
    assert.equal(isFalse(['0']), true);
  });

  it("isFalse(['1'])", function () {
    assert.equal(isFalse(['1']), true);
  });
});

describe("isTrue Comparsions Test", function () {

  function isTrue(x) {
    return (x == true);
  }

  it('isTrue(1)', function () {
    assert.equal(isTrue(1), true);
  });

  it("isTrue('')", function () {
    assert.equal(isTrue(''), true);
  });

  it("isTrue(null)", function () {
    assert.equal(isTrue(null), true);
  });

  it("isTrue(undefined)", function () {
    assert.equal(isTrue(undefined), true);
  });

  it("isTrue(false)", function () {
    assert.equal(isTrue(false), true);
  });

  it("isTrue('0')", function () {
    assert.equal(isTrue('0'), true);
  });

  it("isTrue(new Boolean(false))", function () {
    assert.equal(isTrue(new Boolean(false)), true);
  });

  it("isTrue({})", function () {
    assert.equal(isTrue({}), true);
  });

  it("isTrue([])", function () {
    assert.equal(isTrue([]), true);
  });

  it("isTrue([0])", function () {
    assert.equal(isTrue([0]), true);
  });

  it("isTrue([1])", function () {
    assert.equal(isTrue([1]), true);
  });

  it("isTrue(['0']", function () {
    assert.equal(isTrue(['0']), true);
  });

  it("isTrue(['1'])", function () {
    assert.equal(isTrue(['1']), true);
  });
});

// Finally it's common to use ducktypping when you examine objects.
// (If it walks like duck and talks like duck then treat it like a duck)
