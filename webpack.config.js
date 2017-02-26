// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: __dirname+'/app/index.html',
//     filename: 'index.html',
//     inject: 'body'
// })

module.exports = {
    entry:[
        './app/index.js'
        ],
    output:{
        path:__dirname+'/public/js',
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {test: /\.js$/, exclude:'/node_modules', loader:'babel-loader'},
            {test: /\.css$/, loader:'style-loader!css-loader'}
        ]
    },
    //plugins: [HtmlWebpackPluginConfig]
}