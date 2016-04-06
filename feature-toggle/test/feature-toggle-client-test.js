var assert = require('chai').assert,
  featureToggle = require('../feature-toggle-client.js'),
  jsdom = require('mocha-jsdom');

describe('Feature Toggle Client Tests', function() {

  mockFeatureLocationSearch = function mockFeatureLocationSearch(queryString) {
    Object.getPrototypeOf(featureToggle).locationSearch = function() {
      return queryString;
    };
  };

  it('Query parameters to key-map', function() {
    mockFeatureLocationSearch('?param1=1&param2=2&param3=3');

    var params = featureToggle.getParams();
    assert.equal(Object.keys(params).length, 3);
  });

  it('Query parameters to feature list', function() {
    mockFeatureLocationSearch('?param1=1&param2=2&param3=3&ft=ft1,ft2');

    assert.equal(featureToggle.getParamFeatures().length, 2);
  });

  it('Fetch Active Features', function() {
    assert.equal(featureToggle.getActiveFeatures(['ft1'], ['ft2', 'ft3']).length, 3);
  });

  jsdom();
  it('Sets Flags', function() {
    document.getElementsByTagName('body')[0].className = '.new-feature{display:none;}';

    featureToggle.setFlags(['ft1', 'ft2']);
    assert.equal(document.getElementsByTagName('body')[0].className, '.new-feature{display:none;} ft-ft1 ft-ft2');
  });
});