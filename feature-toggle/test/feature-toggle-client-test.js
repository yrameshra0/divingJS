var assert = require('chai').assert,
  featureToggle = require('../feature-toggle-client.js');

describe('Feature Toggle Client Tests', function() {
  it('Retrives request parameters', function() {
    var params = featureToggle.getParams();

    assert.equal(params.length, 3);
  });
});