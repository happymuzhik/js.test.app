const webpack = require('webpack');
var js_directory = './work_directory/js/';

module.exports = {
	// watch: true, // для автоматического сохранения, можно также указфывать при запуске вебпака - webpack --watch
    entry: "./"+js_directory+"entry.js",
    output: {
        filename: js_directory+"bundle.js"
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