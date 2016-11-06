import nodes from './../nodes.js';

let test_form = {
	show: function(){
		nodes.test_form.container.classList.remove('hidden');
	},
	hide: function(){
		nodes.test_form.container.classList.add('hidden');
	}
};

nodes.test_form.background.addEventListener('click', function(){
	test_form.hide();
});
nodes.test_form.cancel_button.addEventListener('click', function(){
	test_form.hide();
});

module.exports = test_form;