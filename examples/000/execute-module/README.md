The purpose of the files in the directory is to be an example of a JavaScript Module that is meant to be executed in a browser.  The app is processed by webpack and then a file called bundle.js is generated.  Bundle.js can be executed in the browser.  So there you have it JS modules running in the browsner in 2016.

app.js - this file requires the module and uses the functionality that it exports.

bundle.js - the file that was compiled, generated, rendered, processed (whatever verb you like) so the module works in the browser.

index.html - this file is for your browser.

module-example - the module.

webpack.config.js - this is the file webpack uses to do its thing.