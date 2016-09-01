The purpose of the 001 examples is to demonstrate the power Webpack bundling. To
do this I am going to create a small, organic application.  This small application
will be executed in a web page called mega-site.

********************************************************************************
V.0.0.2
********************************************************************************

V0.0.2 In the V0.0.2 version/tag mega-site is an example of how a very small
change in the source javascript changes the hash name.  Changing the has name
busts the cache.

********************************************************************************
V.0.0.1
********************************************************************************

V0.0.1 In the V0.0.1 version/tag mega-site is a webpack bundling website architecture.

Basically the adder source code is in its own directory.  The process is to run
webpack to generate a bundle.  Then you move the bundle into the web site's source.

If you examine the 001/MEGA-SITE/js/ directory for the v.0.0.1 version you will
see a file called adder.##############.bundle.js.  The ########### part is the
hash.  The hash is calculated with the contents of the file.  The hash only changes when the contents of the file change.  That means the brower's cache for this file
will only be broken when the contents of the file change.

Hash caching is an example of a benefit that comes from post development compiling.  


********************************************************************************
V.0.0.0
********************************************************************************

V0.0.0 In the V0.0.0 version/tag mega-site is a typical 2010 website architecture.
This architecture is fine for a static website.  There are a lot of problems with
this architecture for applications.  

Since the mega-site is 99% static website and it just have a tiny bit of
application it's easy to ignore the application aspects.

In mega-site there is one small piece of application like functionality.  That
small pieces is the adder in the upper right hand part of the page.

So what is wrong with this.

First, the abstract problems:

1) Versioning of specific application type functionality is impossible.
2) Tracking of specific functionality changes is difficult.
3) Deep coupling between internal implementation details and the rest of the
static site.
4) No clear boundaries between various pieces of functionality.  


Next, the practical problems:

1) Versioning - Rolling back and forth between branches or commits is
simple; rolling back and forth between a piece of functionality can very hard with
this architecture.

What I mean is that if the mega-site has dozens of changes scattered through out
the project over several months teasing out the commits for a specific piece of
functionality can be challenging.  Also a single commit can have changes for the
not only the functionality you care about but other changes too.  This architecture
makes it's easy to roll the entire project back and forth.  But if all you want
to do is roll back the way the adder functionality works to the way it was a few
months ago, well that can get tricky.

2) Tracking Specific Functionality - Seeing the commits/versions for a branch is
simple; seeing the commits/versions for a piece of functionality can be very
hard with this architecture.

What I mean is that if several groups are working on mega-site, in feature branches,
and those branches are constantly being merged into the master branch, then it's
very likely that a feature's commits will be lost in the mix.

3) Coupling - Anything that is on the DOM can be coupled to.  So when various
groups are working on mega-site if on group sees an element on the index.html they
will probably assume that they can reference that element.  If you change the name
or purpose of that element you will probably break any work that has been coupled
to that element.

4) Boundaries - Since the adder HTML is in the index.html there is no way for
anyone to know that it's part of the adder functionality.  It looks like just
another piece of HTML.  

5) Caching - I admit the previous issues are very abstract and their impact varies
dramatically from environment to environment.  But caching JS issues impact everyone.
Most browsers will cache mega-adder.js.  In addition mega-adder.js may be cached as
various levels throughout the internet.  Once mega-adder.js has been cached making
changes to it will always result in lots of customer support calls the end up
asking the users to clear their cache.  It's a huge pain.  

V.0.0.1 won't solve all of these issues, but it will solve the caching issues and
move the project in a direction where the other issues can be solved.
