import template from './../templates/test_table.js';

let element = function(data) {
	let node = template(data);
	let element = {
		'name': null,
		'surname': null,
		'email': null,
		'first_number': null,
		'second_number': null,
		'summ': null,
	};
	return element;
};
module.exports = element;