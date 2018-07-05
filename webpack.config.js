const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
		{ test: /(\.css$)/, loaders: ['style-loader', 'css-loader', 'postcss-loader']}, 
        {
		  test: /\.(jpe|jpg|png|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
		  use: [
		    'file-loader',
		    {
		      loader: 'image-webpack-loader',
		      options: {
		        mozjpeg: {
		          progressive: true,
		          quality: 65
		        },
		        // optipng.enabled: false will disable optipng
		        optipng: {
		          enabled: false,
		        },
		        pngquant: {
		          quality: '65-90',
		          speed: 4
		        },
		        gifsicle: {
		          interlaced: false,
		        },
		        // the webp option will enable WEBP
		        webp: {
		          quality: 75
		        }
		      }
		    },
		  ],
		},
        {
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		}
		]
	},
	plugins: [
	new CopyWebpackPlugin([
            {from:'images',to:'images'},
            {from:'js',to:'js'}  
        ]),
	new HtmlWebpackPlugin({
		template: './src/index.html'
	}),

	],
    devServer: {
        port: 5976
    },
    optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
}