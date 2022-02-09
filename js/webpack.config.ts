import * as path from 'node:path'
import type { Configuration } from 'webpack'

const config: Configuration = {
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
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  externals: [
    // copied and modified from "flarum-webpack-config"
    function ({ request }, callback) {
      if (!request) {
        callback()
        return
      }

      const matches = /^flarum\/(.+)$/.exec(request)
      if (matches) {
        return callback(undefined, "root flarum.core.compat['" + matches[1] + "']")
      }
      callback()
    },
  ],
}

export default config
