At my new job we are using a neat plugin called HTML Webpack Plugin.  The Plugin
(remember plugins do "things" AFTER the bundles are generated and loaders do things
before the bundles are generated) creates a webpage that uses the created bundles.

This is a thing in webpack because bundle names constantly change.  

The plugin can make a page from scratch or use a template.  Where I work the name
of the template it uses is index.html (which made things very confusing.)

To run this (assuming you have node/npm installed) all you need to do is enter:

npm install
npm run serveitup
