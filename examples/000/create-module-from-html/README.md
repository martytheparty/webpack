The purpose of the files in the directory is to be an example of HTML that is converted into a JavaScript Module and that Module is executed in a browser.  The app is processed by webpack and then a file called bundle.js is generated.  Bundle.js can be executed in the browser.  So there you have it JS modules running in the browser in 2016.

HTML -> MODULE -> EXTEND BROWSER -> RUN MODULE IN BROWSER

html_to_module.js - this file requires the html.

bundle.js - the file that was compiled, generated, rendered, processed (whatever verb you like) so the module works in the browser.

index.html - this file is for your browser.

html.html - this is the HTML file.

webpack.config.js - this is the file webpack uses to do its thing.

You can see these files in action at <a href='http://www.webpack.peachyga.com/examples/000/create-module-from-html/'>http://www.webpack.peachyga.com/examples/000/create-module-from-html/</a>.
