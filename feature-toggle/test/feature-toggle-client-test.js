var assert = require('chai').assert,
  featureToggle = require('../feature-toggle-client.js');

describe('Feature Toggle Client Tests', function() {

  mockFeatureLocationSearch = function mockFeatureLocationSearch(queryString) {
    Object.getPrototypeOf(featureToggle).locationSearch = function() {
      return queryString;
    };
  };

  it('Retrives request parameters', function() {
    mockFeatureLocationSearch('?param1=1&param2=2&param3=3');

    var params = featureToggle.getParams();
    assert.equal(Object.keys(params).length, 3);
  });
});