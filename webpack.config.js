import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

module.exports = {
  mode: "production",
  plugins: [new BundleAnalyzerPlugin()],
};
