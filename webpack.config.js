module.exports = {
  entry: {
    'app':    './demo/app.jsx'
  },
  output: {
    filename: 'demo/[name].js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ['babel-loader']},
      {test: /\.(sa|c)ss$/,loaders: ['style-loader', 'css-loader', 'sass-loader']},
    ]
  },
  resolve: {
    extensions:['.js']
  }
};
