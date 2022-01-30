require('ignore-styles')

require('@babel/register')({
    ignore: [/(node_module)/],
    presets: ['@babel/preset-env', '@babel/preset-react']
})

require('./server')

// regiseter = use babel
// preest = import lib 
// https://babeljs.io/docs/en/
//https://babeljs.io/docs/en/presets