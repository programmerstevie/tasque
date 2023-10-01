import path from "path";
import sveltePreprocess from "svelte-preprocess";
import Svelteloader from "svelte-loader";
import type { Configuration } from "webpack";

const mode = process.env.NODE_ENV ?? "development";
const isProduction = mode === "production";
const isDevelopment = !isProduction;

const rendererConfig: Configuration = {
  entry: "./src/renderer/main_window/main.ts",
  target: "web",
  resolve: {
    // see below for an explanation
    alias: {
      svelte: path.resolve("node_modules", "svelte/src/runtime"), // Svelte 3: path.resolve('node_modules', 'svelte')
      renderLib: path.resolve("src/renderer/lib"),
    },
    extensions: [".mjs", ".js", ".svelte", ".ts"],
    mainFields: ["svelte", "browser", "module", "main"],
    conditionNames: ["svelte", "browser", "import"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          }
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            preprocess: sveltePreprocess({
              postcss: true,
              typescript: true,
              scss: true,
            }),
            compilerOptions: {
              // Dev mode must be enabled for HMR to work!
              dev: isDevelopment,
            },
            emitCss: isProduction,
            hotReload: isDevelopment,
            hotOptions: {
              // List of options and defaults: https://www.npmjs.com/package/svelte-loader-hot#usage
              noPreserveState: false,
              optimistic: true,
            },
          },
        },
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};

export default rendererConfig;
