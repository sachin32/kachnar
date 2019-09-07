const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/lib/index.js'),
    output: {
        path: path.join(__dirname, './lib'),
        filename: 'index.js',
        library: 'kachnar',
        libraryTarget: 'commonjs2',
        publicPath: '/lib/',
    },
    externals: [nodeExternals()],
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_module/react'),
            'react-dom': path.resolve(__dirname, './node_module/react-dom'),
        },
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    }
};