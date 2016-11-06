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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_nodes2.default.add_new_row_button.addEventListener('click', function () {
		_test_form2.default.show();
	});

	var app = {
		'test_form': _test_form2.default
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
		}
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

/***/ }
/******/ ]);