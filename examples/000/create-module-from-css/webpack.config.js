module.exports = {
    entry: "./css_to_module.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
