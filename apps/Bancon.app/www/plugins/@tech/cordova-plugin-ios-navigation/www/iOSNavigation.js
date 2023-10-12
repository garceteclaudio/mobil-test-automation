cordova.define("@tech/cordova-plugin-ios-navigation.iOSNavigation", function(require, exports, module) {
var exec = require("cordova/exec");

var PLUGIN_NAME = "iOSNavigation";

var iOSNavigation = {
    setAllowsBackForwardNavigationGestures: function (value, successCallback, errorCallback) {
        exec(
            successCallback,
            errorCallback,
            PLUGIN_NAME,
            "setAllowsBackForwardNavigationGestures",
            [value]
        );
    },
};

module.exports = iOSNavigation;

});
