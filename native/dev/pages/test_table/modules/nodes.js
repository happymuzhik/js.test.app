let nodes = {
	'add_new_row_button': document.getElementById('test-table__add-button'),
	'test_form': {
		'container': document.getElementById('test-form'),
		'background': document.getElementById('test-form__background'),
		'cancel_button': document.getElementById('test-form__cancel-button'),
		'save_button': document.getElementById('test-form__save-button'),
		'form_data': {
			'id': document.getElementById('test-form__body'),
			'name': document.getElementById('test-form__input-name'),
			'surname': document.getElementById('test-form__input-surname'),
			'email': document.getElementById('test-form__input-email'),
			'first_number': document.getElementById('test-form__input-first-number'),
			'first_number': document.getElementById('test-form__input-second-number'),
			'summ': document.getElementById('test-form__input-summ'),
		}
	},
	'test_table_container': document.getElementById('test-table__container'),
};
module.exports = nodes;