const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const environment = isProd ? 'production' : 'development';

console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`Webpack building for environment: ${environment}`);

module.exports = {
    isDev,
    isProd,
    getBaseConfig(type) {
        return {
            mode: environment,
            devtool: false,
            output: {
                publicPath: '/dist/',
                filename: '[name].js',
            },
            resolve: {
                extensions: ['*', '.js', '.vue', '.json'],
            },
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                    },
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                    },
                    {
                        test: /\.css$/,
                        use: type === 'server' ?
                            ['css-loader/locals'] :
                            [MiniCssExtractPlugin.loader, {
                                loader: 'css-loader',
                                options: {
                                    minimize: isProd,
                                },
                            }],
                    },
                ],
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                }),
                new VueLoaderPlugin(),
                new MiniCssExtractPlugin({
                    filename: 'app.css',
                    chunkFilename: '[name].css',
                }),
            ],
        };
    },
};
