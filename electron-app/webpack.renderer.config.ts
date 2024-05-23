import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
import * as path from 'path';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      "app/components": path.resolve(__dirname, "src/app/components/"),
      "app/pages": path.resolve(__dirname, "src/app/pages/"),
      "app": path.resolve(__dirname, "src/app/"),
      "core/registerEvents": path.resolve(__dirname, "src/core/utils/registerEvents")
    }
  },
};
