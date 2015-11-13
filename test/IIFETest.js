var assert = require('chai').assert;

describe("Immediately Invoked Function Expression (IIFE -- Ben Alman)", function() {
    it("Prototypes without IIFE", function() {
        var LightBulb = function() {
                this.isOn = false;
            },
            lightBulb = new LightBulb();
        LightBulb.prototype.toggle = function toggle() {
            this.isOn = !this.isOn;

            return this.isOn;
        };
        LightBulb.prototype.getState = function getState() {
            return this.isOn;
        };
        LightBulb.prototype.on = function on() {
            this.isOn = true;
        };
        LightBulb.prototype.off = function off() {
            this.isOn = false;
        };
        LightBulb.prototype.blink = function blink() {
            lightBulb.on();
            lightBulb.off();
            lightBulb.on();
        };

        assert.equal(lightBulb.toggle(), true);
        assert.equal(lightBulb.toggle(), false);
    });

    it("IIFE Implementation", function() {
        (function() {
            var isOn = false,
                toggle = function toggle() {
                    this.isOn = !this.isOn;

                    return this.isOn;
                },
                getState = function getState() {
                    return this.isOn;
                },
                on = function on() {
                    this.isOn = true;
                },
                off = function off() {
                    this.isOn = false;
                },
                blink = function blink() {
                    on();
                    off();
                    on();
                },
                lightBulb = {
                    toggle: toggle,
                    getState: getState,
                    on: on,
                    off: off,
                    blink: blink
                };

            assert.equal(lightBulb.toggle(), true);
            assert.equal(lightBulb.toggle(), false);
        }());
    });
});