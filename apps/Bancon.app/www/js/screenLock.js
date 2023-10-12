var exec = require("cordova/exec");

var PLUGIN_NAME = "ScreenLock";

var screenLock = {
    isScreenLockEnabled: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, PLUGIN_NAME, "isScreenLockEnabled", [null]);
    },
};

module.exports = screenLock;
