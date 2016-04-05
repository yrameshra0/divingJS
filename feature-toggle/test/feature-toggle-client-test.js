var assert = require('chai').assert,
  featureToggle = require('../feature-toggle-client.js');

describe('Feature Toggle Client Tests', function() {
  it('Retrives request parameters', function() {
    Object.getPrototypeOf(featureToggle).locationSearch = function() {
      return '?param1=1&param2=2&param3=3';
    };
    var params = featureToggle.getParams();

    assert.equal(Object.keys(params).length, 3);
  });
});