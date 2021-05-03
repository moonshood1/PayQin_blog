const Encore = require("@symfony/webpack-encore");
const PurgeCssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore.setOutputPath("public/build/")
  .setPublicPath("/build")
  .addEntry("app", "./assets/app.js")
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .configureBabel((config) => {
    config.plugins.push("@babel/plugin-proposal-class-properties");
  })
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = "usage";
    config.corejs = 3;
  })
  .enablePostCssLoader()
  .enableReactPreset();

  if (Encore.isProduction()) {
    Encore.addPlugin(
      new PurgeCssPlugin({
        paths: glob.sync([path.join(__dirname, "templates/**/*.html.twig")]),
        defaultExtractor: (content) => {
          return content.match(/[\w-/:]+(?<!:)/g) || [];
        },
      })
    );
  }

module.exports = Encore.getWebpackConfig();
