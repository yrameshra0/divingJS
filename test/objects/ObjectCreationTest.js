var assert = require('chai').assert;
var _ = require('underscore');

describe('Object Creation', function() {
    it('Using Constructor Functions', function() {
        function Car(color, direction, mph) {
            this.color = color || 'pink';
            this.direction = direction || 0; //0=Straight Ahead
            this.mph = mph || 0;

            this.gas = function gas(amount) {
                amount = amount || 10;
                this.mph += amount;
                return this;
            };

            this.brake = function brake(amount) {
                amount = amount || 10;
                this.mph = ((this.mph - amount) < 0) ? 0 : this.mph - amount;
                return this;
            };
        }

        var myCar = new Car();

        assert.ok(myCar.color, 'Has a color');
        assert.equal(myCar.gas().mph, 10, '.gas() should add 10 mph');
        assert.equal(myCar.brake(5).mph, 5, '.brake(5) should subtract 5 mph');
    });

    it('Constructor Functions -- Encapsulations', function() {
        function Car(color, direction, mph) {
            var isParkingBrakeOn = false;
            this.color = color || 'pink';
            this.direction = direction || 0; //0=Straight Ahead
            this.mph = mph || 0;

            this.gas = function gas(amount) {
                amount = amount || 10;
                this.mph += amount;
                return this;
            };

            this.brake = function brake(amount) {
                amount = amount || 10;
                this.mph = ((this.mph - amount) < 0) ? 0 : this.mph - amount;
                return this;
            };

            this.toggleParkingBrake = function toggleParkingBrake() {
                isParkingBrakeOn = !isParkingBrakeOn;
                return this;
            };

            this.isParked = function isParked() {
                return isParkingBrakeOn;
            };

        }

        var myCar = new Car();

        assert.ok(myCar.color, 'Has a color');
        assert.equal(myCar.gas().mph, 10, '.gas() should add 10 mph');
        assert.equal(myCar.brake(5).mph, 5, '.brake(5) should subtract 5 mph');
        assert.ok(myCar.toggleParkingBrake().isParked, '.toggleParkingBrake works');
    });

    it('Object Literal Notation', function() {
        var myCar = {
            color: 'pink',
            direction: 0,
            mph: 0,
            gas: function gas(amount) {
                amount = amount || 10;
                this.mph += amount;
                return this;
            },
            brake: function brake(amount) {
                amount = amount || 10;
                this.mph = ((this.mph - amount) < 0) ? 0 : this.mph - amount;
                return this;
            }
        };

        assert.ok(myCar.color, 'Has a color');
        assert.equal(myCar.gas().mph, 10, '.gas() should add 10 mph');
        assert.equal(myCar.brake(5).mph, 5, '.brake(5) should subtract 5 mph');
        /**
        Object literal have great advantage, but they offer no way to create data privacy.
        */
    });

    it('Using Factories', function() {
        var car = function car(color, direction, mph) {
            var isParkingBrakeOn = false;
            return {
                color: color || 'pink',
                direction: direction || 0,
                mph: mph || 0,
                gas: function gas(amount) {
                    amount = amount || 10;
                    this.mph += amount;
                    return this;
                },
                brake: function brake(amount) {
                    amount = amount || 10;
                    this.mph = ((this.mph - amount) < 0) ? 0 : this.mph - amount;
                    return this;
                },
                toggleParkingBrake: function toggleParkingBrake() {
                    isParkingBrakeOn = !isParkingBrakeOn;
                    return this;
                },
                isParked: function isParked() {
                    return isParkingBrakeOn;
                }
            };
        };

        var myCar = car();

        assert.ok(myCar.color, 'Has a color');
        assert.equal(myCar.gas().mph, 10, '.gas() should add 10 mph');
        assert.equal(myCar.brake(5).mph, 5, '.brake(5) should subtract 5 mph');
        assert.ok(myCar.toggleParkingBrake().isParked, '.toggleParkingBrake works');
    });

    it('Flyweight Factory Cloning', function() {
        var carPrototype = {
                gas: function gas(amount) {
                    amount = amount || 10;
                    this.mph += amount;
                    return this;
                },
                brake: function brake(amount) {
                    amount = amount || 10;
                    this.mph = ((this.mph - amount) < 0) ? 0 : this.mph - amount;
                    return this;
                },
                color: 'pink',
                direction: 0,
                mph: 0
            },

            car = function car(options) {
                return _.extend(Object.create(carPrototype), options);
            },

            myCar = car({
                color: 'red'
            });

        assert.equal(myCar.color, 'red', 'Has a color');
        assert.equal(myCar.gas().mph, 10, '.gas() should add 10 mph');
        assert.equal(myCar.brake(5).mph, 5, '.brake(5) should subtract 5 mph');
    });
});