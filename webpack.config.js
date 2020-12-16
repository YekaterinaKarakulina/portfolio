// const path = require('path');

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = (env, options) => {
//   const isProduction = options.mode === 'production';
//   const config = {
//     mode: isProduction ? 'production' : 'development',
//     devtool: isProduction ? 'none' : 'source-map',
//     watch: !isProduction,
//     entry: './src/index.jsx',

//     output: {
//       path: path.join(__dirname, '/dist'),
//       filename: 'bundle.js',
//     },
//     module: {
//       rules: [
//         {
//           test: /\.html$/,
//           loader: 'html-loader',
//         },
//         {
//           test: /\.scss$/,
//           use: [
//             MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
//           ],
//         },
//         {
//           test: /\.(png|svg|jpe?g|JPG|gif)$/,
//           use: [
//             {
//               loader: 'file-loader',
//             },
//           ],
//         },
//       ],
//     },
//     devServer: {
//       stats: 'errors-only',
//     },
//     plugins: [
//       new CleanWebpackPlugin(),
//       new HtmlWebpackPlugin({
//         template: 'index.html',
//       }),
//       new MiniCssExtractPlugin({
//         filename: 'style.css',
//       }),
//     ],
//   };
//   return config;
// };

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;
  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'];
  };

  const getPlugins = () => {
    const plugins = [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: './src/assets', to: path.join(__dirname, './build/assets') }],
      }),
      new PrettierPlugin(),
    ];

    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'style.css',
        })
      );
    }
    return plugins;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',
    devtool: isProd ? 'none' : isDev && 'source-map',
    watch: isDev,
    entry: './src/index.jsx',
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js',
      publicPath: '/',
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },

        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },

        {
          test: /\.(png|jpg|jpeg|gif|ico|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },

        {
          test: /\.(css)$/,
          use: getStyleLoaders(),
        },

        {
          test: /\.(scss)$/,
          use: [...getStyleLoaders(), 'sass-loader'],
        },
        {


          
            test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]


        }
        
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: getPlugins(),
    devServer: {
      stats: 'errors-only',
      historyApiFallback: true,
    },
  };
};
