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

Todos
-----

- [ ] Let users specify any version of Webpack and this package will fetch that
      version. Likely to be released as rocket:webpack@2.0.0
- [ ] When rocket:webpack lets dependents specify Webpack versions, we can also
      let dependents specify which loaders to also include. rocket:module will
      look at this package to find loaders. This will make it easy configure loaders
      for use with rocket:module.
