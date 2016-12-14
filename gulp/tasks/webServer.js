var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config').webServer;
var pm2 = require('pm2');
var globalConfig = require('../../config')
var exec = require('child_process').exec
var rootDir = __dirname + '/../../build/server'



function runPM2() {
  console.log("Starting web server using PM2, args=", config.args)
  pm2.connect(function (err) {
    if (err) {
      console.error(err);
      process.exit(2);
    }

    var appName = 'toolsServer' //apps[0].pm2_env.name

    pm2.start({
      name: appName,
      cwd: rootDir,
      script: rootDir + '/www.js',         // Script to be run
      watch: globalConfig.gulp.pm2.watch,
      ignore_watch: ["node_modules"],
      args: config.args,
      interpreterArgs: globalConfig.gulp.pm2.interpreterArgs,
    }, function (err, apps) {

      
      if (err) {
        console.error(err)
        pm2.disconnect();   // Disconnect from PM2
        throw err
      }


      // Stop all server process when the gulp process dies
      process.on('SIGINT', () => {
        console.log('Received SIGINT. Stopping server');

        console.log("delete app name=",appName)
        pm2.delete(appName, err => {
          if (err) {
            console.error('Failed to delete app, err = ', err);
          }
        });

        // Wait 2 seconds to give PM2 time to stop server
        setTimeout(function () { //simulate a long request
          pm2.disconnect();   // Disconnect from PM2
          console.log("Ok now we are done")
          process.exit()
        }, 2000);
      });

    });

    // Connect log from the server process and display them here
    pm2.launchBus((err, bus) => {
      bus.on('log:out', data => {
        console.log('server: ', data.data);
      });

      bus.on('log:err', data => {
        console.error('server:err: ', data.data);
      });

      bus.on('log:error', data => {
        console.error('server:err: ', data.data);
      });
    });
  });

}

var devServerProcess = null
function runNode() {
  if (devServerProcess) {
    console.log("kill current running dev server process")
    devServerProcess.kill()
    devServerProcess = null
  }

  console.log("Starting web server using node, args=", config.args)
  devServerProcess = exec('node --debug ' + rootDir + '/www.js',
    {
      cwd: rootDir
    },
   function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
}

gulp.task('webServer', ['build'], function () {
  if (globalConfig.isProduction) {
    runPM2()
  } else {
    runNode()
  }
});
