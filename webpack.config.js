const webpack = require('webpack');

const js_table_dir = 'pages/test_table/';
const js_table_entry = 'entry.js';
const js_table_bundle = 'bundle.js';

const js_common_dir = 'common/';

const js_dev_dir = './native/dev/';
const js_prod_dir = './native/public/js/'

module.exports = {
	// watch: true, // для автоматического сохранения, можно также указфывать при запуске вебпака - webpack --watch
    entry: js_dev_dir+js_table_dir+js_table_entry,
    output: {
        filename: js_prod_dir+js_table_dir+js_table_bundle
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },            
        ]
    },
};