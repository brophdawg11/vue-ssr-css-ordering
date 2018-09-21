/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
/* eslint-enable import/no-extraneous-dependencies */

const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const { getBaseConfig } = require('./webpack.base.config');

module.exports = function getClientConfig(configOpts) {
    const clientConfig = merge(getBaseConfig('client'), {
        name: 'client',
        entry: {
            app: './src/entry-client.js',
        },
        plugins: [
            new webpack.DefinePlugin({ 'process.env.VUE_ENV': '"client"' }),
            new VueSSRClientPlugin(),
        ],
    });

    return clientConfig;
};
