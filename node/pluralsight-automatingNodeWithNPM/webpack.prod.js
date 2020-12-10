const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const outputDirectory = path.resolve(__dirname, "dist");
const entry = path.join(__dirname, "index.ts");

module.exports = {
  mode: "production",
  entry: entry,
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].vendor.js",
    path: outputDirectory,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin(
      [
        { from: "index.ts", to: outputDirectory, flatten: true },
        { from: "index.ts", to: outputDirectory, flatten: true },
      ],
      { copyUnmodified: true }
    ),
  ],
};
