cordova.define("@tech/cordova-plugin-screen-lock-enabled.screenLock", function(require, exports, module) {
var exec = require("cordova/exec");

var PLUGIN_NAME = "ScreenLock";

var screenLock = {
    isScreenLockEnabled: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, PLUGIN_NAME, "isScreenLockEnabled", [null]);
    },
};

module.exports = screenLock;

});
