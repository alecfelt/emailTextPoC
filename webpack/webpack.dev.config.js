var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    mode: 'development',
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [
			{
            	test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },{
                test: /\.less$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"},
					{loader: "less-loader"}
				]
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}
