var assert = require('chai').assert;

describe('Functional Tests', function() {
    var shows = [{
            name: 'Morning Show',
            timing: '9AM',
            ticketPrice: '300'
        }, {
            name: 'Afternoon Show',
            timing: '12AM',
            ticketPrice: '100'
        }, {
            name: 'Night Show',
            timing: '9PM',
            ticketPrice: '290'
        }],
        books = [{
            title: 'Dev lok',
            author: 'Dev Dutt Patnik',
            price: '520'
        }, {
            title: 'Software Craftsman',
            author: 'Robert Martin',
            price: '500'
        }, {
            title: 'Modern JS Applications',
            author: 'Eric Elliot',
            price: '346'
        }];

    it('Abstracting Algorithms from Data types', function() {
        var sortedShows = shows.sort(function(a, b) {
                return a.ticketPrice > b.ticketPrice;
            }),
            sortedBooks = books.sort(function(a, b) {
                return a.price > b.price;
            });

        assert.ok(sortedShows[0].ticketPrice < sortedShows[1].ticketPrice);
        assert.ok(sortedBooks[0].price < sortedBooks[1].price);

    });

    it('Tradition looping constructs', function() {
        var i,
            length = books.length;

        for (i = 0; i < length; i++) {
            books[i].category = 'casual';
        }

        assert.equal(books[0].category, 'casual');
    });

    it('Functiona looping constructs', function() {
        books.forEach(function(book) {
            book.edition = 'First';
        });

        assert.equal(books[1].edition, 'First');
    });

});