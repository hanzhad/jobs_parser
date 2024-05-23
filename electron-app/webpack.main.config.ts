import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
import * as path from 'path';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/core/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    alias: {
      "app/components": path.resolve(__dirname, "src/app/components/"),
      "app/pages": path.resolve(__dirname, "src/app/pages/"),
      "app": path.resolve(__dirname, "src/app/"),

      "core/utils": path.resolve(__dirname, "src/core/utils/"),
      "core/decorators": path.resolve(__dirname, "src/core/utils/decorators/"),
      "core/application": path.resolve(__dirname, "src/core/src/application"),
      "core/listeners": path.resolve(__dirname, "src/core/src/listeners/index"),
    }
  },
};
