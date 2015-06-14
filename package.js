Package.describe({
  name: 'rocket:webpack',
  version: '1.9.10_2',
  summary: 'Provides Webpack from NPM.',
  git: 'https://github.com/trusktr/rocket-webpack.git',
  documentation: 'README.md'
})

Npm.depends({
    'webpack': "1.9.10",

    // packages like rocket:module have to discover the location of the
    // rocket:webpack isopack in the filesystem and tell Webpack to look in the
    // isopack's `npm/node_modules` so that Webpack will be able to find the
    // loaders.
    'babel-loader': '5.0.0',
    'css-loader': '0.12.0',
    'style-loader': '0.12.1'
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2')
  api.addFiles('webpack.js', 'server')
  api.export('Webpack', 'server')
})

Package.onTest(function(api) {
  api.use('tinytest')
  api.use('rocket:webpack')
  api.addFiles('webpack-tests.js')
})
