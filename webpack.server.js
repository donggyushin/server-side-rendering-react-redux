const path = require('path')

module.exports = {
    // Inform webpack that we're building a bundle for nodejs,
    // rather than for the brower. Default value is browser. 
    target: 'node',

    // Tell webpack the root file of our server application
    entry: './src/index.js',

    // Tell webpack where to put the out file that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                // Run babel only on javascript files
                test: /\.js?$/,
                // If webpack finds js file, run babel-loader as a loader
                loader: 'babel-loader',
                // Tell webpack not to run babel over files
                exclude: /node_modules/,
                // Options will be applied to the babel
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}