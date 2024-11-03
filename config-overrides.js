const CompressionPlugin = require("compression-webpack-plugin");

module.exports = function override(config, env) {
  config.plugins = config.plugins.filter((plugin) => {
    return (
      plugin.constructor.name !== "ForkTsCheckerWebpackPlugin" &&
      plugin.constructor.name !== "typescriptFormatter"
    );
  });

  // Add the compression plugin to the Webpack plugins array
  config.plugins.push(
    new CompressionPlugin({
      test: /\.(js|ts|jsx|tsx|css|html)$/, // Compress only JS, CSS, and HTML files
      threshold: 8192, // Only compress files larger than 10 KB
    }),
  );

  return config;
};
