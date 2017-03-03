module.exports = {
    entry: {
      adder: "../modules/adder/mega-adder.js",
      bigrally: "../modules/bigrally/big-rally.js",
      mega: "../modules/megaentry/mega.js"
    },
    output: {
        path: "../bundles/",
        filename: "[name].[hash].bundle.js"
    }
};
