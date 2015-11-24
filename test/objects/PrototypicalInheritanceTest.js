var assert = require('chai').assert;
var stampit = require('stampit');

describe('Prototypical Inheritance', function() {
    it('Using StampIt', function() {
        var testObj = stampit()
            .methods({
                delegateMethod: function delegateMethod() {
                    return 'shared property';
                }
            })
            .state({
                instanceProp: 'instance property'
            })
            .enclose(
                function() {
                    var privateProp = 'private property';
                    this.getPrivate = function getPrivate() {
                        return privateProp;
                    };
                })
            .create();

        assert.equal(testObj.delegateMethod(), 'shared property');
        assert.ok(Object.getPrototypeOf(testObj).delegateMethod, 'Delegate methods are stored on the delegate prototype');

        assert.equal(testObj.instanceProp, 'instance property');
        assert.ok(testObj.hasOwnProperty('instanceProp'), 'state should be instance safe');

        assert.notOk(testObj.hasOwnProperty('privateProp'), 'should hide private properties');
        assert.equal(testObj.getPrivate(), 'private property');
    });
});