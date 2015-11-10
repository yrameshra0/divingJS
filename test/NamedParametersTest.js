var assert = require('chai').assert;
var _ = require('underscore');

var userProto = {
  name: '',
  email: '',
  alias: '',
  showInSearch: true,
  colorScheme: 'light'
};
describe("Name Parameters", function() {
  it("Large Arity", function() {
    // Arity is number of variables you pass in a function.

    createUser = function(name, email, alias, showInSearch, colorScheme) {
      return {
        name: name || userProto.name,
        email: email || userProto.email,
        alias: alias || userProto.alias,
        showInSearch: showInSearch || userProto.showInSearch,
        colorScheme: colorScheme || userProto.colorScheme,
      };
    };

    var newUser = createUser('Tony', '', '', '', 'dark');

    assert.equal(newUser.colorScheme, 'dark');
  });

  it("Using underscore extend", function() {
    createUser = function(options) {
      return _.extend({}, userProto, options);
    };

    var newUser = createUser({
      name: 'Mike',
      showInSearch: false
    });

    assert.equal(newUser.colorScheme, 'light');
  });
});
