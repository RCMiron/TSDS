const path = require('path');

module.exports = {
    entry: './src/index',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts'
        ]
    },
    output: {
        filename: 'index.js'
    }
};
