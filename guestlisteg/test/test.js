var $list = $('#guestlist-view'),
    checkedinClass = 'icon-check',
    guestSelector = '.guest';


test('Guestlist', function() {
    ok($list.length, 'List element should have guests');
});

test('Guests', function() {
    // Grab first guest from the list
    var $guest = $($list.find(guestSelector)[0]),
        guestExists = !!$guest[0];

    //simulate click
    $guest.click();

    ok($guest.hasClass(checkedinClass), 'Should be checked on click');

    $guest.click();

    // To avoid false positve, make sure you have guest element to test against.
    ok(guestExists && !$guest.hasClass(checkedinClass), 'Should toggle off when clicked again');
});