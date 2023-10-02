import path from "path";
import sveltePreprocess from "svelte-preprocess";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import Webpack, { type Configuration } from "webpack";

const mode = (process.env.NODE_ENV as Configuration["mode"]) ?? "development";
const isProduction = mode === "production";
const isDevelopment = !isProduction;

const rendererConfig: Configuration = {
  mode,
  target: "web",

  resolve: {
    // see below for an explanation
    alias: {
      svelte: path.resolve("node_modules", "svelte/src/runtime"), // Svelte 3: path.resolve('node_modules', 'svelte')
      renderLib: path.resolve(__dirname, "src/renderer/lib"),
    },
    extensions: [".mjs", ".js", ".svelte", ".ts"],
    mainFields: ["svelte", "browser", "module", "main"],
    conditionNames: ["svelte", "browser", "import"],
  },
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /svelte\.\d+\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // url: false, // necessary if you use url('/path/to/some/asset.png|jpg|gif')
              sourceMap: true,
              
            },
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.css$/,
        include: /svelte\.\d+\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
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
              dev: isDevelopment,
            },
            emitCss: true,
            hotReload: isDevelopment,
            hotOptions: {
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      'filename': 'styles.css'
    }),
    new Webpack.HotModuleReplacementPlugin({

    })
  ]
};

export default rendererConfig;
