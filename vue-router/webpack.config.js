const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        app: path.join(__dirname, 'main.js'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',   // use로 대체 가능
        }, {
            test: /\.css$/,
            loader: [
                'vue-style-loader',
                'css-loader'
            ]
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
    },
};