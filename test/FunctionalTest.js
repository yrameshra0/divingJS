var assert = require('chai').assert;

describe('Functional Tests', function() {
	it('Abstracting Algorithms from Datatypes', function() {
		var shows = [{
				name: 'Morning Show',
				timing: '9AM',
				ticketPrice: '300'
			}, {
				name: 'Afternoon Show',
				timing: '12AM',
				ticketPrice: '100'
			}, {
				name: 'Nigth Show',
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

		var sortedShows = shows.sort(function(a, b) {
				return a.ticketPrice > b.ticketPrice;
			}),
			sortedBooks = books.sort(function(a, b) {
				return a.price > b.price;
			});

		assert.ok(sortedShows[0].ticketPrice < sortedShows[1].ticketPrice);
		assert.ok(sortedBooks[0].price < sortedBooks[1].price);

	});
});