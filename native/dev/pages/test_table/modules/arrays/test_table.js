import element from './../../../../modules/element.js';
import nodes from './../nodes.js';

let get_pattern = function(data) {
	let tr = element('tr', {'data-id':data.id});
	tr.appendChild(element('td', {'class':'center'}, data.name||''));
	tr.appendChild(element('td', {'class':'center'}, data.surname||''));
	tr.appendChild(element('td', {'class':'center'}, data.email||''));
	tr.appendChild(element('td', {'class':'center'}, data.first_number||''));
	tr.appendChild(element('td', {'class':'center'}, data.second_number||''));
	tr.appendChild(element('td', {'class':'center'}, data.summ||''));
	tr.appendChild(element('td', {'class':'center'}, null, [
			element('button', {'data-id':data.id, 'title': 'Edit', 'class':'info'}, '✐')
		])
	);
	tr.appendChild(element('td', {'class':'center'}, null, [
			element('button', {'data-id':data.id, 'title': 'Delete', 'class':'danger'}, '×')
		])
	);
	return tr;
}

let get_no_data_pattern = function(){
	return '<tr><td colspan="8" class="center">No data found</td></tr>';
}

let container = nodes.test_table_container;

let table = {
	elements: {},
	no_elements: function(){
		return (Object.keys(this.elements).length == 0);
	},
	add_row: function(data){
		if (this.no_elements()){
			container.innerHTML = '';
		}
		let tr = get_pattern(data);
		container.appendChild(tr);
		this.elements[data.id] = tr;
		return tr;
	},
	delete_row: function(id){
		for (let k in this.elements) {
			if (this.elements[k].getAttribute('data-id') == id){
				let tr = this.elements[k];
				this.elements[k].remove();
				delete(this.elements[k]);
				if (this.no_elements()){
					container.innerHTML = get_no_data_pattern();
				}
				return tr;
			}
		};		
	},
	recreate: function(data){
		container.innerHTML = '';
		for (var i = 0; i < data.length; i++) {
			let tr = get_pattern(data[i]);
			container.appendChild(tr);
			this.elements[data.id] = tr;
		};
		if (this.no_elements()){
			container.innerHTML = get_no_data_pattern();
		}
		return this.elements;
	},
	get_data: function(){		
	}
};
module.exports = table;