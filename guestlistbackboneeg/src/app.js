var $ = require('jquery-browserify'),
    guestlistModel = require('./guestlistmodel'),
    guestlistCollection = require('./guestlistcollection').create(guestlistModel.load()),
    guestlistView = require('./guestlistview').create(),
    $container = $('#container'),
    app = require('tinyapp'),
    initialize = function initialize() {
        console.log('Application Initialization happened');
        guestlistView.render(guestlistCollection);
        $container.empty().html(guestlistView.$el);
    };


app.renderReady(initialize);

$(function init() {

});