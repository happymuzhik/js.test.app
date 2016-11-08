import nodes from './../nodes.js';
import test_table from './../arrays/test_table.js';

let test_form = {
	show: function(){
		nodes.test_form.container.classList.remove('hidden');
	},
	hide: function(){
		nodes.test_form.container.classList.add('hidden');
	},
	get_data: function(){
		return {
			'id': nodes.test_form.form_data.id.getAttribute('data-id')||null,
			'name': nodes.test_form.form_data.name.value,
			'surname': nodes.test_form.form_data.surname.value,
			'email': nodes.test_form.form_data.email.value,
			'first_number': nodes.test_form.form_data.first_number.value,
			'first_number': nodes.test_form.form_data.first_number.value,
			'summ': nodes.test_form.form_data.summ.value
		}
	}
};

nodes.test_form.background.addEventListener('click', function(){
	test_form.hide();
});
nodes.test_form.cancel_button.addEventListener('click', function(){
	test_form.hide();
});
nodes.test_form.save_button.addEventListener('click', function(){
	let data = test_form.get_data();
	if (!data.id){
		data.id = parseInt(Math.random()*10000);
	}
	test_table.add_row(data);
});

module.exports = test_form;