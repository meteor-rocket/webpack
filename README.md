rocket:webpack
==============

A Webpack provider package for Meteor.

For now, only specific versions of Webpack are provided: those matching the
released versions of this package. Need a specific version of Webpack? Open an
issue for it on GitHub.

On the wishlist: allow dependents of rocket:webpack to specify a specific
version of webpack to fetch from NPM.

Usage
-----

This package simply provides webpack from NPM via the `Webpack` export, so in
your app or package code:

```js
Webpack({
    // configuration
}, callback);
```
or

```js
var webpack = Package['rocket:webpack'].Webpack

webpack({
    // configuration
}, callback);
```

Roadmap
