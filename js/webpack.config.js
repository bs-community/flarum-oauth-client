const path = require('path')

/** @type {import('webpack').Configuration} */
const config = {
  entry: {
    forum: './forum.js',
    admin: './admin.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'assign',
      name: 'module.exports',
    },
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
