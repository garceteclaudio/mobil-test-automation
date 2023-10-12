cordova.define("@pkg/cordova-plugin-biometry.Biometry", function(require, exports, module) {
function Biometry() {
    this.NAME = "Biometry";
    this.ACTION = {
        DETECT: "DETECT",
        AUTH: "AUTH",
    };
}

// Plugin Errors
Biometry.prototype.CODE = {
    // ------------------------------------------------------ Thruthy codes (response was succesful)

    DETECT_FINGER: 100, // Android and iOS in old versions report this.
    DETECT_GENERIC: 101, // Android P+ reports this for either finger or face biometry.
    DETECT_FACE: 102, // iOS with FaceID
    DETECT_UNKNOWN: 103, // iOS with an unknown biometric detection.

    AUTH_DONE_RIGHT: 200, // Authentication has correct credentials
    AUTH_DONE_WRONG: 201, // Authentication has incorrect credentials

    // -------------------------------------------------------- Falsy codes (response was erroneous)

    ERROR_INTERNAL: -1, // internal exception, most commonly a typo  with constants. (do not change)
    ERROR_UNKNOWN: -2, // An unexepected exception was thrown, this is very bad.
    ERROR_ARGS: -3, // Invalid arguments provided.

    DETECT_NO_HARDWARE: -100, // The device does not have support for biometry.
    DETECT_NO_AVAILABLE: -101, // Biometry is supported, but it hasn't been configured yet.

    AUTH_CANCELED: -200,
    AUTH_LOCKOUT_TEMP: -201,
    AUTH_LOCKOUT_PERM: -202,
};

Biometry.prototype.detect = function (onSuccess, onError) {
    window.cordova.exec(
        onSuccess,
        onError,
        this.NAME,
        this.ACTION.DETECT,
        getParams.call(this, {})
    );
};

Biometry.prototype.auth = function (args, onSuccess, onError) {
    var params = getParams.call(this, args);
    if (!isBoolean(args.hasConfirmation)) {
        args.hasConfirmation = false;
    }
    // determine needed args are sent correctly
    [
        { name: "androidLabelHeader", check: isString },
        { name: "androidLabelTitle", check: isString },
        { name: "bothLabelDesc", check: isString },
        { name: "bothLabelCancel", check: isString },
    ].forEach(function(prop) {
        var target = params[1][prop.name];
        if (prop.check(target)) return;
        throw new TypeError("Invalid argument '" + prop.name + "'");
    });
    return window.cordova.exec(
        onSuccess,
        onError,
        this.NAME,
        this.ACTION.AUTH,
        params
    );

    function isString(arg) {
        return typeof arg === "string" && arg.length > 0;
    }

    function isBoolean(arg) {
        return typeof arg === "boolean";
    }
};

module.exports = new Biometry();

function getParams(args) {
    if (typeof args === "undefined") args = {};
    if (!args || typeof args !== "object" || Array.isArray(args)) {
        throw new TypeError("Expecting an args object");
    }
    var opts = {
        NAME: args.NAME || this.NAME,
        CODE: args.CODE || this.CODE,
    };
    if (args.NAME) delete args.NAME;
    if (args.CODE) delete args.CODE;
    return [opts, args];
}

});
