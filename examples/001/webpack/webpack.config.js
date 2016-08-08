module.exports = {
    entry: {adder: "../modules/adder/mega-adder.js"},
    output: {
        path: "../bundles/",
        filename: "[name].[hash].bundle.js"
    }
};
