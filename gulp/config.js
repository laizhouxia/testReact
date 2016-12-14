var dest = './build',
  clientSrc = './client',
  serverSrc = './server'
  mui = './node_modules/material-ui/src';


var jsDst = dest + '/static/js';

module.exports = {
  css: {
    src: clientSrc + "/stylesheets/**",
    dest: dest + '/static/css'
  },
  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: clientSrc + '/js/app.js',
      dest: jsDst ,
      outputName: 'app.js'
    }],
    extensions: ['.js'],
  },

  webServer: {
    args: ""
  }
};
