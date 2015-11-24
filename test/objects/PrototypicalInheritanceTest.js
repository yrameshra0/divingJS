var assert = require('chai').assert;
var stampit = require('stampit');

describe('Prototypical Inheritance using StampIt', function() {
    it('StampIt Introduction', function() {
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

        assert.notOk(testObj.hasOwnProperty('getPrivateProp'), 'should hide private properties');
        assert.equal(testObj.getPrivate(), 'private property');
    });

    it('Delegate Prototype', function() {
        var stamp = stampit().methods({
            delegateMethod: function delegateMethod() {
                return 'shared property';
            }
        });

        var obj1 = stamp();
        var obj2 = stamp();

        Object.getPrototypeOf(obj1).delegateMethod = function() {
            return 'altered';
        };

        assert.equal(obj1.delegateMethod(), 'altered');
        assert.equal(obj2.delegateMethod(), 'altered');
    });

    it('Concatenative Inheritance', function() {
        var person = stampit().state({
            name: ''
        });

        var jimmy = person({
            name: 'Jimmy Joe'
        });

        assert.equal(jimmy.name, 'Jimmy Joe');
    });

    it('Functional Inheritance', function() {
        var person = stampit().enclose(
            function() {
                var firstName = '',
                    lastName = '';

                this.getName = function getName() {
                    return firstName + ' ' + lastName;
                };

                this.setName = function setName(options) {
                    firstName = options.firstName;
                    lastName = options.lastName;
                    return this;
                };
            }
        );

        var jimmy = person().setName({
            firstName: 'Jimmy',
            lastName: 'Joe'
        });

        assert.equal(jimmy.getName(), 'Jimmy Joe');
    });

    it('Composing Objects', function() {
        var a = stampit().enclose(function() {
            var a = 'A';

            this.getA = function getA() {
                return a;
            };
        });

        var b = stampit().enclose(function() {
            var a = 'B';

            this.getB = function getB() {
                return a;
            };
        });

        var c = stampit().compose(a, b);

        var foo = c();

        assert.equal(foo.getA(), 'A');
        assert.equal(foo.getB(), 'B');

    });
});