cordova.define("@pkg/cordova-plugin-download.Download", function(require, exports, module) {
function Download(path, type, onSuccess, onError) {
    var FNC = "function";
    var STR = "string";
    var handleSuccess = typeof onSuccess === FNC ? onSuccess : function () {};
    var handleError = typeof onError === FNC ? onError : function () {};

    if (typeof path !== STR) {
        throw new TypeError("Expecting a string path");
    }

    if (typeof type !== STR) {
        throw new TypeError("Expecting a ContentType");
    }

    var matches = [/^application\/pdf$/, /^image\/(jpe?g|png)$/].filter(function (regx) {
        return type.match(regx);
    });

    if (!matches.length) {
        throw new Error("Invalid ContentType");
    }

    path = path.indexOf("file:///") === 0 ? path.substring(7) : path;
    window.cordova.exec(handleSuccess, handleError, "Download", "download", [
        path,
        type,
        Download.CODE,
    ]);

    return true;
}

Download.CODE = {
    ERROR_PERMISSION_DENIED: "ERROR_PERMISSION_DENIED",
    ERROR_INVALID_TYPE: "ERROR_INVALID_TYPE",
    ERROR_INVALID_DEST: "ERROR_INVALID_DEST",
    ERROR_INVALID_FILE: "ERROR_INVALID_FILE",
    ERROR_INVALID_COPY: "ERROR_INVALID_COPY",
};

Download.exec = Download;

module.exports = Download;

});
