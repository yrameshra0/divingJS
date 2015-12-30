var $ = require('jquery-browserify'),
    Guest = require('./guestmodel'),
    guestListModel = require('./guestlistmodel'),
    GuestCollection = require('./guestlistcollection'),
    guestlistView = require('./guestlistview').create(),
    $container = $('#container'),
    app = require('tinyapp'),
    initialize = function initialize() {
        console.log('Application Initialization happened');

        var guestCollection = GuestCollection.create(createGuestList());

        guestlistView.render(guestCollection.models);
        $container.empty().html(guestlistView.$el);
    },
    createModel = function createModel(data) {
        return new Guest({
            name: data.name,
            id: data.id
        });
    },
    createGuestList = function createGuestList() {
        var model = [];
        guestListModel.load().forEach(function generate(data) {
            var myModel = createModel(data);
            model.push(myModel);
        });

        return model;
    };


app.renderReady(initialize);

$(function init() {

});