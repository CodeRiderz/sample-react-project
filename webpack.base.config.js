var path = require('path');
var webpack = require('webpack');
var _ = require('lodash');
var _src = path.join(__dirname, 'src');
var _dist = path.join(__dirname, 'dist');
var AssetsPlugin = require('assets-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (options) {
    var opt = _.assign({},{
        dev : false
    },options);

    var includePaths = [
        path.resolve(__dirname, "./node_modules/compass-mixins/lib"),
        path.resolve(__dirname, './node_modules/bootstrap-sass/assets/stylesheets'),
        path.resolve(__dirname, './src/common-assets/css')
    ]

    // loaders init
    var loaders = [
        {test: /\.jsx?$/, loaders: ['babel'], exclude: /(node_modules|bower_components)/},
        {test: /\.(png|gif|jpe?g|svg)$/i, loader: 'url?limit=10'},
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10&minetype=application/font-woff"},
        {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?limit=10"}
    ]

    var cssLoader = {test: /\.scss$/, loaders: ['style', 'css?sourceMap' , 'resolve-url', 'sass?sourceMap']};
    if (!opt.dev) {
        cssLoader = {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(['css', 'resolve-url', 'sass'])
        }
    }

    loaders.push(cssLoader)

    // loaders init end

    var config = {
        node: {
            __filename: true
        },
        addVendor: function (name, path) {
            this.resolve.alias[name] = path;
            this.module.noParse.push(new RegExp(path));
        },
        entry: getEntry(opt),
        output: getOutput(opt),
        resolve: {
            root: [
                _src
            ]
        },
        module: {
            noParse: [],
            loaders: loaders
        },
        sassLoader: {
            includePaths: includePaths
        },
        plugins: getPlugins(opt),
        devtool: opt.dev ? 'cheap-module-eval-source-map' : ''
    };

    if (opt.dev) {
      _.assign({}, config, {
        devtool: 'source-map'
      });
    }

    return config;
};

function getPlugins(opt) {
    var plugins = [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify( opt.dev ? 'development' : 'production')
            },
            'ICON_RES': '2x'
        })
    ];

    if (!opt.dev) {
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                properties: true,
                sequences: true,
                dead_code: true,
                conditionals: true,
                comparisons: true,
                evaluate: true,
                booleans: true,
                unused: true,
                loops: true,
                hoist_funs: true,
                cascade: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                drop_debugger: true,
                unsafe: true,
                hoist_vars: true,
                negate_iife: true,
            },
            output: {
                space_colon: false,
                comments: function(node, comment) {
                    var text = comment.value;
                    var type = comment.type;
                    if (type == "comment2") {
                        // multiline comment
                        return /@copyright/i.test(text);
                    }
                }
            }
        }));
        plugins.push(new webpack.optimize.DedupePlugin());
        plugins.push(new webpack.optimize.OccurenceOrderPlugin());
        plugins.push(new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}));
        plugins.push(new webpack.optimize.CommonsChunkPlugin({async: true}));
        // vendors.js doesn't need to use hash, use version instead if necessary
        plugins.push(new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'));
        plugins.push(new ExtractTextPlugin("[name].[contenthash].css", { allChunks: true }));
        plugins.push(new AssetsPlugin({ filename : 'hash.json', prettyPrint: true}));
    } else {
        console.log('enable hot module replacement plugin');
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new webpack.NoErrorsPlugin());
    }
    return plugins;
}

function getOutput(opt) {
    var output = {
        path: _dist,
        filename: opt.dev ? "[name].js" : "[name].[hash].js",
        publicPath : '/assets/',
        chunkFilename: "socio.chunk.[id].[hash].js"
    };

    if(opt.dev) {
        output = _.assign({}, output, {
            publicPath: 'http://localhost:8080/static/' // Required for webpack-backend-server
        });
    }
    return output;
}
function getEntry(opt) {
    var entry = {
        socio: [
            'babel-polyfill',
            path.join(_src, "App.js")
        ],
        vendors: ['react', 'lodash']
    };

    if(opt.dev) {
        entry = _.assign({},entry,{
            devServerClient: 'webpack-dev-server/client?http://localhost:8080/static/'
        });
        entry.socio.push('webpack/hot/dev-server');
    }
    return entry;
}
