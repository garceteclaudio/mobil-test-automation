cordova.define("@tech/cordova-plugin-vu-fraud-analysis.fraudanalysisSDK", function(require, exports, module) {
var exec = require('cordova/exec');

var VUFingerprintPlugin = {
    getHash: function(seedEnabled, success, error) {
        exec(success, error, "fraudanalysisSDK", "getHash", [seedEnabled]);
    },

    getDeviceID: function(success, error) {
        exec(success, error, "fraudanalysisSDK", "getDeviceID");
    },

    getDeviceName: function(success, error) {
        exec(success, error, "fraudanalysisSDK", "getDeviceName");
    },

    getDeviceManufacturer: function(success, error) {
        exec(success, error, "fraudanalysisSDK", "getDeviceManufacturer");
    },

    getDeviceResolution: function(success, error) {
        exec(success, error, "fraudanalysisSDK", "getDeviceResolution");
    },

    isDeviceRooted: function(success, error) {
        exec(success, error, "fraudanalysisSDK", "isDeviceRooted");
    },
    
    isFingerprintCompatible : function(success, error) {
        exec(success, error, "fraudanalysisSDK", "isFingerprintCompatible");
    },
    
    isGPSCompatible : function(success, error) {
        exec(success, error, "fraudanalysisSDK", "isGPSCompatible");
    },
    
    getOsVersion : function(success, error) {
        exec(success, error, "fraudanalysisSDK", "getOsVersion");
    },
    
    getOsName : function(success, error) {
        exec(success, error, "fraudanalysisSDK", "getOsName");
    },
    
    getAPILevel : function(success, error) {
        exec(success, error, "fraudanalysisSDK", "getAPILevel");
    },
    
    getDeviceIdentifier : function(success, error) {
        exec(success, error, "fraudanalysisSDK", "getDeviceIdentifier");
    },
    
    isDeviceJailbroken : function(success, error) {
        exec(success, error, "fraudanalysisSDK", "isDeviceJailbroken");
    },

    getRandomSeed : function(success, error) {
        exec(success, error, "fraudanalysisSDK", "getRandomSeed");
    },

    getDeviceLocation: function(success, error) {
        exec(function(e) {
            
            if(window.cordova.platformId.toLowerCase() == "android")
            {

                navigator.geolocation.getCurrentPosition(
                    
                    function (position) {
                        var deviceLocation = {
                            latitude : position.coords.latitude,
                            longitude : position.coords.longitude
                        }
                        success(deviceLocation);
                      }
                    , function(){}, { enableHighAccuracy: true });

            }
            else
            {
                success(e);
            }
        }, error, "fraudanalysisSDK", "getDeviceLocation");
    },

    getFingerprintInfo: function(versionFraud, success, error){
        exec(function(e) {
            
            if(versionFraud)
            {
                if(window.cordova.platformId.toLowerCase() == "ios")
                {
                    var jsonFingerprint = e;

                    var fingerprint = {
                        "deviceId": jsonFingerprint.deviceID,
                        "deviceIdentifier": jsonFingerprint.deviceIdentifier,
                        "deviceName": jsonFingerprint.deviceName,
                        "deviceManufacturer": jsonFingerprint.manufacturer,
                        "isJailbroken": jsonFingerprint.isDeviceJailbroken,
                        "deviceResolution": jsonFingerprint.resolution,
                        "rooted": jsonFingerprint.isDeviceRooted,
                        "fingerprintCompatible": jsonFingerprint.isFingerprintCompatible,
                        "gpsCompatible": jsonFingerprint.isGPSCompatible,
                        "osName": jsonFingerprint.osName,
                        "osVersion": jsonFingerprint.osVersion,
                        "apiLevel": jsonFingerprint.apiLevel
                    }

                    success(fingerprint)


                } else {
                
                    var jsonFingerprint = JSON.parse(e);

                    var fingerprint = {
                        "deviceId": jsonFingerprint.deviceID,
                        "deviceIdentifier": jsonFingerprint.deviceIdentifier,
                        "deviceName": jsonFingerprint.deviceName,
                        "deviceManufacturer": jsonFingerprint.manufacturer,
                        "isJailbroken": jsonFingerprint.isDeviceJailbroken,
                        "deviceResolution": jsonFingerprint.resolution,
                        "rooted": jsonFingerprint.isDeviceRooted,
                        "fingerprintCompatible": jsonFingerprint.isFingerprintCompatible,
                        "gpsCompatible": jsonFingerprint.isGPSCompatible,
                        "osName": jsonFingerprint.osName,
                        "osVersion": jsonFingerprint.osVersion,
                        "apiLevel": jsonFingerprint.apiLevel
                    }

                    success(JSON.stringify(fingerprint))
                }
            }
            else
            {
                success(e);
            }
        }, error, "fraudanalysisSDK", "getFingerprintInfo")
    }

}

module.exports = VUFingerprintPlugin;








});
