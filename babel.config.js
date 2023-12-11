// This is for Jest

module.exports = {
    presets:[
        '@babel/preset-env',
        ['@babel/preset-react', {runtime: 'automatic'}]
    ],
    plugins:["inline-react-svg"]
}