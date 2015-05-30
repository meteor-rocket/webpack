rocket:webpack
==============

Webpack provider package for Meteor.

Usage
-----

This package simply provides webpack from npm via the package's `Webpack`
export, so in your app or package code:

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
