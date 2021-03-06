var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./html_to_module.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html" }
        ]
    },
    plugins: [
    new HtmlWebpackPlugin({
      title: 'This File Was Generated By Webpack And The HTML-WEBPACK-PLUGIN',
      filename: 'index.html'
    })
  ]
};
