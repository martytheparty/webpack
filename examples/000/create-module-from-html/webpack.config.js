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
    }
};
