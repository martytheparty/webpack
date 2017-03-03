The purpose of the files in the directory is to be an example of Plain Old JavaScript that is converted into a JavaScript Module and that Module is executed in a browser.  The app is processed by webpack and then a file called bundle.js is generated.  Bundle.js can be executed in the browser.  So there you have it JS modules running in the browser in 2016.

POJS -> MODULE -> EXTEND BROWSER -> RUN MODULE IN BROWSER

pojo_to_module.js - this file requires the pojs.

bundle.js - the file that was compiled, generated, rendered, processed (whatever verb you like) so the module works in the browser.

index.html - this file is for your browser.

pojs-index.html - this file is for your browser.

pojs.js - the plain old JavaScript.

webpack.config.js - this is the file webpack uses to do its thing.

You can see these files in action at <a href='http://www.webpack.peachyga.com/examples/000/create-module-from-pojs/'>http://www.webpack.peachyga.com/examples/000/create-module-from-pojs/</a>.
