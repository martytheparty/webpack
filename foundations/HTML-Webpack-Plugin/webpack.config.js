var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./entry.js",
    output: {
        path: 'dist',
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'template.html'      
    })]
};
