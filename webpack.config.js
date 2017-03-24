var webpack = require('webpack');

module.exports = {
    context: `${__dirname}/client`,
    entry: {
        index: `./index.js`,
        vendor: [`angular`]
    },
    output: {
        path: __dirname + '/client/js',
        filename: '[name].js'
    }
};
