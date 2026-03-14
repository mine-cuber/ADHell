const DEV = process.env.VUE_APP_DEV === "true";
const STEAM = process.env.VUE_APP_STEAM === "true";

module.exports = {
  publicPath: "./",
  lintOnSave: false,
  outputDir: STEAM ? "../AppFiles" : "dist",
  configureWebpack: {
    devtool: DEV ? "eval-source-map" : "source-map",
  },
  pages: {
    index: {
      entry: "src/main.js",       
      template: "public/index-template.html", // renamed to avoid vue creating a new index.html
      filename: "index.html", // output file, must be named index.html for the game to work
    },
  },
};
