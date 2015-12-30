var app = require('tinyapp'),

    // Assign Backbone.View to the View var.
    View = require('backbone').View,
    template = require('underscore').template,

    $ = app.$,
    checkedinClass = 'icon-check',
    listClass = 'dropdown-menu',
    guestClass = 'guest',

    // Rebroadcast 	DOM click events on the app event aggregator
    relayClick = function relayClick(e) {

        // Get the ID from the element and use it to namespace the event.
        var sourceId = $(this).attr('id'),
            event = app.extend(e, {
                sourceId: sourceId
            });

        app.trigger('toggled-checkedin', event);
    },

    delegate = function delegate() {
        console.log('GuestListView -- Delegate');

        // Listen for changed events from the model and make sure 
        // the element reflects the current state
        app.on('changed.checkedIn', function changedHandler(event) {
            var id = event.id;
            // Select the right list iten by ID.
            this.$el.find('#' + id).toggleClass(checkedinClass, event.checkedIn);
        });
    },

    render = function render(data) {
        console.log('GuestListView -- Render --> ' + JSON.stringify(data));

        var $el = this.$el;

        // Prevent memory leaks in renderer cases.
        $el.off('click' + this.className);

        processTemplate($el, data);

        // Reattach listener.
        $el.on('click.' + this.className, relayClick);

        return this;
    },

    // Define Backbone View
    GuestlistView = View.extend({
        tagName: 'ol',
        id: 'guestlist-view',
        className: listClass,
        initialize: delegate,
        render: render,
        // Add the event handler to the view object:
        relayClick: relayClick,
        // Let Backbone handle the event delegation:
        events: {
            'click .guest': 'relayClick'
        }
    }),

    // Processing Template
    processTemplate = function processTemplate($el, guestList) {
        console.log('GuestListView -- Process Template');

        // Compile the guest template.
        guestTemplate = template($('#guestTemplate').html());

        $el.empty();

        // Loop over the passed-in guest model and render them as template elements
        guestList.forEach(function(guestModel) {
            var guest;

            // Build  the data object to pass into the template
            guest = guestModel.toJSON();

            // Add guestClass to the data object.
            guest.guestClass = guestClass;

            // Process the template data and append the output to the list element
            $el.append(guestTemplate(guest));
        });
    },

    // Expose a factory function.
    create = function create() {
        return new GuestlistView();
    },

    api = {
        create: create
    };

module.exports = api;