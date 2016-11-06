import element from './../../../../../modules/element.js';
let template = function(data) {
	let name = element('td', null, data.name||'');
	let surname = element('td', null, data.surname||'');
	let email = element('td', null, data.email||'');
	let first_number = element('td', null, data.first_number||'');
	let second_number = element('td', null, data.second_number||'');
	let summ = element('td', null, data.summ||'');
	let cont = element('tr', null, null, [
		name,
		surname,
		email,
		first_number,
		second_number,
		summ
	]);
};
module.exports = template;