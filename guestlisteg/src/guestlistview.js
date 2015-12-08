var $ = require('jquery-browserify'),
    checkedinClass = 'icon-check',
    listClass = 'dropdown-menu',
    guestClass = 'guest',
    toggleCheckedIn = function toggelCheckedIn(e) {
        $(this).toggleClass(checkedinClass);
    },

    $listView = $('<ol>', {
        id: 'guestlist-view',
        'class': listClass
    }).on('click', '.' + guestClass, toggleCheckedIn),

    render = function render(guestList) {
        $listView.empty();

        guestList.forEach(function(guest) {
            $guest = $('<li class="' + guestClass + '">' +
                '<span class="name">' + guest +
                '</span></li>');

            $guest.appendTo($listView);
        });

        return $listView;
    },

    api = {
        render: render
    };

module.exports = api;