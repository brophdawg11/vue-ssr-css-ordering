/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
/* eslint-enable import/no-extraneous-dependencies */

const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

const { getBaseConfig } = require('./webpack.base.config');

module.exports = function getServerConfig(configOpts) {
    const serverConfig = merge(getBaseConfig('server'), {
        name: 'server',
        entry: './src/entry-server.js',
        output: {
            filename: 'server-bundle.js',
            libraryTarget: 'commonjs2',
        },
        target: 'node',
        plugins: [
            new webpack.DefinePlugin({ 'process.env.VUE_ENV': '"server"' }),
            new VueSSRServerPlugin(),
        ],
    });

    return serverConfig;
};
