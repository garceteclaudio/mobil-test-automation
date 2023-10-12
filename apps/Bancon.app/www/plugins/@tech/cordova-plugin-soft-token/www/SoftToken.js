cordova.define("@tech/cordova-plugin-soft-token.SoftToken", function(require, exports, module) {

var exec = require("cordova/exec");

var PLUGIN_NAME = "SoftToken";

var SoftToken = {
  getToken: function (name, successCallback, errorCallback){
        exec(successCallback, errorCallback, PLUGIN_NAME, "getToken", [name]);
  }
};

module.exports = SoftToken;

});
