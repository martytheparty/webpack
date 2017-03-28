const GenerateJsonPlugin = require('generate-json-webpack-plugin');

var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin();

module.exports = {
    entry: {
      adder: "../modules/adder/mega-adder.js",
      bigrally: "../modules/bigrally/big-rally.js",
      mega: "../modules/megaentry/mega.js"
    },
    output: {
        path: "../bundles/",
        filename: "[name].[hash].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "raw-loader" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [assetsPluginInstance]
};
