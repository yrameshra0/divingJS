var Model = require('backbone').Model,
    _ = require('underscore'),
    app = require('tinyapp'),

    // Set the checkedIn attribute on the model.
    toggleCheckedIn = function toggleCheckedIn() {
        this.set('checkedIn', !this.get('checkedIn'));
    },
    delegate = function delegate() {
        var sourceId = this.get('id');

        // Listen for toggled event, sent from the view.
        // sourceId is used to filter the event. The model
        // does not need to know where the event comes from,
        // only which item is clicked.
        // ==> #TODO Currently the event is listened for all the model elements present in the system
        // ==> #TODO_CONTI This should ideally be good if it listens for the single model element only
        // ==> #TODO Qunit Grunt Task is failing currently suspecting that its because the tinyapp 
        // ==> #TODO_CONTI event dependence that its currently failing 

        app.on('toggled-checkedin', _.bind(toggleCheckedIn, this));

        // Relay the change event so that the view can listen for it
        // without knowing anything about the model
        this.on('change:checkedIn', _.bind(function(item) {

            // Send a shallow copy of the list item as a
            // message payload. Make sure the new checkedIn
            // state is easy to access.
            var event = _.extend({}, item, {
                sourceId: this.id,
                checkedIn: item.get('checkedIn')
            });

            // Broadcast the message on the aggregator
            app.trigger('changed.checkedIn', event);

        }, this));
    },
    // The collection expects a Backbone.Model constructor.

    api = Model.extend({
        defaults: {
            name: 'Not Specified',
            id: 'Not Specified'
        },
        initialize: delegate,
        toggleCheckedIn: toggleCheckedIn
    });

module.exports = api;