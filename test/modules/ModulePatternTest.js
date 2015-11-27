var assert = require('chai').assert;
var _ = require('underscore');

var app = {};

describe('Module Design Pattern Tests', function() {
    it('Using Global Variable', function() {
        var myModule = (function() {
            return {
                hello: function helloModule() {
                    return 'Hello Global Module';
                }
            };
        })();

        assert.equal(myModule.hello(), 'Hello Global Module');
    });

    it('Passing existing Variable', function() {
        (function(exports) {
            (function(exports) {
                var api = {
                    moduleExists: function() {
                        return true;
                    }
                };
                _.extend(exports, api);

            })(exports);
        })(app);
        assert.ok(app.moduleExists());
    });
});