const path = require('path');

module.exports = {
    entry:{
       app: './app/index'
    },
    output:{
        path: path.join(__dirname, '/public/js'),
        publicPath: "/",
        filename: '[name].bundle.js'
    },
    module:{
        loaders:[
            {test: /\.js$/, exclude:'/node_modules', loader:'babel-loader'},
            {test: /\.css$/, loader:'style-loader!css-loader'}
        ]
    },
}