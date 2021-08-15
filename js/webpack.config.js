const path = require('path')

/** @type {import('webpack').Configuration} */
const config = {
  entry: {
    forum: './forum.ts',
    admin: './admin.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'assign',
      name: 'module.exports',
    },
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  externals: [
    // copied and modified from "flarum-webpack-config"
    function ({ request }, callback) {
      const matches = /^flarum\/(.+)$/.exec(request)
      if (matches) {
        return callback(null, "root flarum.core.compat['" + matches[1] + "']")
      }
      callback()
    },
  ],
}

module.exports = config
