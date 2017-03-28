The purpose of the 020 examples is to introduce the CNN Injector into the stack.
The CNN Injector smoothes over a problem.  The problem is... a conundrum.  

The problem is that the cache needs to be broken when a resource changes. This is
handled by naming (using a hash calculated from the content) the files.  Renaming
the library in the source code every time the code changes is a real pain in the
butt.  The CNN Injector allows you to deliver the new bundle and a json manifest.
Then you never have to change source code to accommodate bundle name changes.  



********************************************************************************
V.0.2.0
********************************************************************************

V.0.2.0 In the V.0.2.0 version/tag mega-site generates a manifest called
webpack-assets.json for each bundle everytime webpack is executed.  This paves
the way for the cnn-injector.
