/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.app = _app2.default;

	console.info('This is our test app!');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _nodes = __webpack_require__(2);

	var _nodes2 = _interopRequireDefault(_nodes);

	var _test_form = __webpack_require__(3);

	var _test_form2 = _interopRequireDefault(_test_form);

	var _test_table = __webpack_require__(4);

	var _test_table2 = _interopRequireDefault(_test_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_nodes2.default.add_new_row_button.addEventListener('click', function () {
		_test_form2.default.show();
	});

	var app = {
		'test_form': _test_form2.default,
		'test_table': _test_table2.default
	};
	module.exports = app;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var nodes = {
		'add_new_row_button': document.getElementById('test-table__add-button'),
		'test_form': {
			'container': document.getElementById('test-form'),
			'background': document.getElementById('test-form__background'),
			'cancel_button': document.getElementById('test-form__cancel-button')
		},
		'test_table_container': document.getElementById('test-table__container')
	};
	module.exports = nodes;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _nodes = __webpack_require__(2);

	var _nodes2 = _interopRequireDefault(_nodes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var test_form = {
		show: function show() {
			_nodes2.default.test_form.container.classList.remove('hidden');
		},
		hide: function hide() {
			_nodes2.default.test_form.container.classList.add('hidden');
		}
	};

	_nodes2.default.test_form.background.addEventListener('click', function () {
		test_form.hide();
	});
	_nodes2.default.test_form.cancel_button.addEventListener('click', function () {
		test_form.hide();
	});

	module.exports = test_form;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _element = __webpack_require__(5);

	var _element2 = _interopRequireDefault(_element);

	var _nodes = __webpack_require__(2);

	var _nodes2 = _interopRequireDefault(_nodes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var get_pattern = function get_pattern(data) {
		var tr = (0, _element2.default)('tr', { 'data-id': data.id });
		tr.appendChild((0, _element2.default)('td', { 'class': 'center' }, data.name || ''));
		tr.appendChild((0, _element2.default)('td', { 'class': 'center' }, data.surname || ''));
		tr.appendChild((0, _element2.default)('td', { 'class': 'center' }, data.email || ''));
		tr.appendChild((0, _element2.default)('td', { 'class': 'center' }, data.first_number || ''));
		tr.appendChild((0, _element2.default)('td', { 'class': 'center' }, data.second_number || ''));
		tr.appendChild((0, _element2.default)('td', { 'class': 'center' }, data.summ || ''));
		tr.appendChild((0, _element2.default)('td', { 'class': 'center' }, null, [(0, _element2.default)('button', { 'data-id': data.id, 'title': 'Edit', 'class': 'info' }, '✐')]));
		tr.appendChild((0, _element2.default)('td', { 'class': 'center' }, null, [(0, _element2.default)('button', { 'data-id': data.id, 'title': 'Delete', 'class': 'danger' }, '×')]));
		return tr;
	};

	var get_no_data_pattern = function get_no_data_pattern() {
		return '<tr><td colspan="8" class="center">No data found</td></tr>';
	};

	var container = _nodes2.default.test_table_container;

	var table = {
		elements: {},
		no_elements: function no_elements() {
			return Object.keys(this.elements).length == 0;
		},
		add_row: function add_row(data) {
			if (this.no_elements) {
				container.innerHTML = '';
			}
			var tr = get_pattern(data);
			container.appendChild(tr);
			this.elements[data.id] = tr;
			return tr;
		},
		delete_row: function delete_row(id) {
			for (var k in this.elements) {
				if (this.elements[k].getAttribute('data-id') == id) {
					var tr = this.elements[k];
					this.elements[k].remove();
					delete this.elements[k];
					if (this.no_elements) {
						container.innerHTML = get_no_data_pattern();
					}
					return tr;
				}
			};
		},
		recreate: function recreate(data) {
			container.innerHTML = '';
			for (var i = 0; i < data.length; i++) {
				var tr = get_pattern(data[i]);
				container.appendChild(tr);
				this.elements[data.id] = tr;
			};
			if (this.no_elements) {
				container.innerHTML = get_no_data_pattern();
			}
			return this.elements;
		},
		get_data: function get_data() {}
	};
	module.exports = table;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var element = function element(e, a, t, c) {
		var n = document.createElement(e);
		if (t && typeof t == 'string') {
			n.innerText = t;
		}
		if (a && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object') {
			for (var k in a) {
				n.setAttribute(k, a[k]);
			};
		}
		if (c && Array.isArray(c)) {
			for (var i = 0; i < c.length; i++) {
				n.appendChild(c[i]);
			};
		}
		return n;
	};
	module.exports = element;

/***/ }
/******/ ]);