import nodes from './nodes.js';
import test_form from './forms/test_form.js';
import test_table from './arrays/test_table.js';

nodes.add_new_row_button.addEventListener('click', function(){
	test_form.show();
});

let app = {
	'test_form': test_form,
	'test_table': test_table,
};
module.exports = app;