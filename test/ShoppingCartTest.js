var assert = require('chai').assert;
var _ = require('underscore');

describe("Shopping Cart Tests", function () {
  describe("ORDER With UnIntentional side effects", function () {
    var cartProto = {
        items: [],

        addItem: function addItem(item) {
          this.items.push(item);
        }
      },
      createCart = function (items) {
        var cart = Object.create(cartProto);
        cart.items = items;

        return cart;
      },
      //Load cart with saved items
      savedCart = createCart(["apple", "pear", "orange"]);

    it("Session Cart has grapefruit", function () {
      var session = {
        get: function get() {
          return this.cart;
        },

        cart: createCart(savedCart.items)
      };

      // addItem get triggered by event handler somewhere:
      session.get().addItem("grapefruit");

      assert.ok(_.contains(session.cart.items, "grapefruit"));
    });

    it("Saved Cart Too contains grapefruit", function () {
      assert.ok(_.contains(savedCart.items, "grapefruit"));
    });
  });

  describe("ORDER With No side effects", function () {
    var cartProto = {
        items: [],

        addItem: function addItem(item) {
          this.items.push(item);
        }
      },
      createCart = function (items) {
        var cart = Object.create(cartProto);
        cart.items = Object.create(items);

        return cart;
      },
      //Load cart with saved items
      savedCart = createCart(["apple", "pear", "orange"]);

    it("Session Cart has grapefruit", function () {
      var session = {
        get: function get() {
          return this.cart;
        },

        cart: createCart(savedCart.items)
      };

      // addItem get triggered by event handler somewhere:
      session.get().addItem("grapefruit");

      assert.ok(_.contains(session.cart.items, "grapefruit"));
    });

    it("Saved Cart Does not contain grapefruit", function () {
      assert.notOk(_.contains(savedCart.items, "grapefruit"));
    });
  });
});
