var app = require('tinyapp'),
    Guest = require('./guestmodel'),
    Collection = require('backbone').Collection
    .extend({
        model: Guest
    }),

    create = function create(models) {
        models = models || app.pageData.guestList;

        return new Collection(models);
    },

    api = {
        create: create
    };

module.exports = api;