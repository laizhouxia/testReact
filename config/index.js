var YAML = require('yamljs');
var fs = require('fs');
var configDir = process.env.PSC_INTERNAL_TOOLS_CONFIG_DIR;

if (!configDir) {
  throw new Error("PSC_INTERNAL_TOOLS_CONFIG_DIR environment variable is not set")
}

var config;
console.log("Load config file ", configDir + '/config.yaml');
if (!config) {
    try {
	var yaml = fs.readFileSync(configDir + '/config.yaml', 'utf8');
	var config = YAML.parse(yaml);
    } catch (err) {
	console.log("Erro in loading YAML config = ", err);
	throw err;
    }
}

module.exports = config;
