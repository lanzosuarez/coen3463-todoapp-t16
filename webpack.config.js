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
}