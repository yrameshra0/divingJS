var assert = require('chai').assert;
var _ = require('underscore');

describe('Prototype Tests', function() {

    it('Object Prototype - Create', function() {
        var switchProto = {
                isOn: function isOn() {
                    return this.state;
                },
                toggle: function toggle() {
                    this.state = !this.state;
                    return this;
                },
                state: false
            },
            switch1 = Object.create(switchProto),
            switch2 = Object.create(switchProto);


        // will be true for the switch1
        assert.ok(switch1.toggle().isOn());

        // switch state false for switch2 indicates that it's an safe instance 
        assert.notOk(switch2.isOn());
    });

    it('Object Prototype - Mutation', function() {
        var switchProto = {
                isOn: function isOn() {
                    return this.state;
                },
                toggle: function toggle() {
                    this.state = !this.state;
                    return this;
                },
                state: false,
                meta: {
                    name: 'Ligth Switch'
                }
            },
            switch1 = Object.create(switchProto),
            switch2 = Object.create(switchProto);

        switch2.meta.name = 'Breaker Switch';

        // Above Mutation shared over prototype
        assert.equal(switch1.meta.name, 'Breaker Switch');

        switch2.meta = {
            name: 'Power Switch'
        };

        // Above mutation only effects property of particular prototype instance only
        assert.equal(switch1.meta.name, 'Breaker Switch');
        assert.equal(switch2.meta.name, 'Power Switch');

        /**
        Sharing state (nonmethod data) on prototype property is commonly considered an anti pattern in Javascript community,
        because accidental mutations of shared properties are common source of bugs when they occur.
        */
    });

    it('Object Prototype - Cloning', function() {
        var switchProto = {
                isOn: function isOn() {
                    return this.state;
                },
                toggle: function toggle() {
                    this.state = !this.state;
                    return this;
                },
                meta: {
                    name: 'Ligth Switch'
                },
                state: false
            },
            switch1 = _.extend({}, switchProto),
            switch2 = _.extend({}, switchProto);

        switch1.isShared = function isShared() {
            return true;
        };

        assert.ok(switch1.isShared());
        assert.typeOf(switch2.isShared, 'undefined', 'Methods are copied for each instance, not shared');

        assert.ok(switch1.toggle().isOn());
        assert.notOk(switch2.isOn(), 'instance safe');

        switch2.meta.name = 'Breaker Switch';

        assert.equal(switch1.meta.name, 'Breaker Switch', 'Object and Array mutations are shared');

        switch2.meta = {
            name: 'Power Switch'
        };

        assert.equal(switch1.meta.name, 'Breaker Switch');
        assert.equal(switch2.meta.name, 'Power Switch', 'Property replacements are instance specific');

        /**
        Flyweight Patther conserves system resources by storing all reusable properties and methods on a delegate object as 
        opposed to storing copies of them on every instance. This can save a lot of memory and improve system performance 
        dramatically if there are many objects of the same type.
        */
    });
});