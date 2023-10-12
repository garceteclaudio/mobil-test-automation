cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "@pkg/cordova-plugin-biometry.Biometry",
      "file": "plugins/@pkg/cordova-plugin-biometry/www/biometry.js",
      "pluginId": "@pkg/cordova-plugin-biometry",
      "clobbers": [
        "cordova.plugins.biometry"
      ]
    },
    {
      "id": "@pkg/cordova-plugin-download.Download",
      "file": "plugins/@pkg/cordova-plugin-download/www/download.js",
      "pluginId": "@pkg/cordova-plugin-download",
      "clobbers": [
        "cordova.plugins.download"
      ]
    },
    {
      "id": "@pkg/cordova-plugin-info.utils-cordova-plugin",
      "file": "plugins/@pkg/cordova-plugin-info/www/utils-cordova-plugin.js",
      "pluginId": "@pkg/cordova-plugin-info"
    },
    {
      "id": "@pkg/cordova-plugin-info.Info",
      "file": "plugins/@pkg/cordova-plugin-info/www/info.js",
      "pluginId": "@pkg/cordova-plugin-info",
      "merges": [
        "cordova.plugins"
      ]
    },
    {
      "id": "@tech/cordova-plugin-ios-navigation.iOSNavigation",
      "file": "plugins/@tech/cordova-plugin-ios-navigation/www/iOSNavigation.js",
      "pluginId": "@tech/cordova-plugin-ios-navigation",
      "merges": [
        "cordova.plugins.iOSNavigation"
      ]
    },
    {
      "id": "@tech/cordova-plugin-screen-lock-enabled.screenLock",
      "file": "plugins/@tech/cordova-plugin-screen-lock-enabled/www/screenLock.js",
      "pluginId": "@tech/cordova-plugin-screen-lock-enabled",
      "clobbers": [
        "cordova.plugins.screenLock"
      ]
    },
    {
      "id": "@tech/cordova-plugin-serviceOnBoardingSDK.serviceOnBoardingSDK",
      "file": "plugins/@tech/cordova-plugin-serviceOnBoardingSDK/www/serviceOnBoardingSDK.js",
      "pluginId": "@tech/cordova-plugin-serviceOnBoardingSDK",
      "clobbers": [
        "window.serviceOnBoardingSDK"
      ]
    },
    {
      "id": "@tech/cordova-plugin-soft-token.SoftToken",
      "file": "plugins/@tech/cordova-plugin-soft-token/www/SoftToken.js",
      "pluginId": "@tech/cordova-plugin-soft-token",
      "merges": [
        "cordova.plugins.softToken"
      ]
    },
    {
      "id": "@tech/cordova-plugin-vu-fraud-analysis.fraudanalysisSDK",
      "file": "plugins/@tech/cordova-plugin-vu-fraud-analysis/www/fraudanalysisSDK.js",
      "pluginId": "@tech/cordova-plugin-vu-fraud-analysis",
      "clobbers": [
        "window.VUFingerprintPlugin"
      ]
    },
    {
      "id": "@tech/cordova-universal-links-plugin.universalLinks",
      "file": "plugins/@tech/cordova-universal-links-plugin/www/universal_links.js",
      "pluginId": "@tech/cordova-universal-links-plugin",
      "clobbers": [
        "window.universalLinks"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.iosFileSystem",
      "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.Coordinates",
      "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "Coordinates"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "PositionError"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.Position",
      "file": "plugins/cordova-plugin-geolocation/www/Position.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "Position"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-contacts.contacts",
      "file": "plugins/cordova-plugin-contacts/www/contacts.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "navigator.contacts"
      ]
    },
    {
      "id": "cordova-plugin-contacts.Contact",
      "file": "plugins/cordova-plugin-contacts/www/Contact.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "Contact"
      ]
    },
    {
      "id": "cordova-plugin-contacts.convertUtils",
      "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
      "pluginId": "cordova-plugin-contacts"
    },
    {
      "id": "cordova-plugin-contacts.ContactAddress",
      "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactAddress"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactError",
      "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactError"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactField",
      "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactField"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactFindOptions",
      "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactFindOptions"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactName",
      "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactName"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactOrganization",
      "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
      "pluginId": "cordova-plugin-contacts",
      "clobbers": [
        "ContactOrganization"
      ]
    },
    {
      "id": "cordova-plugin-contacts.ContactFieldType",
      "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
      "pluginId": "cordova-plugin-contacts",
      "merges": [
        ""
      ]
    },
    {
      "id": "cordova-plugin-contacts.contacts-ios",
      "file": "plugins/cordova-plugin-contacts/www/ios/contacts.js",
      "pluginId": "cordova-plugin-contacts",
      "merges": [
        "navigator.contacts"
      ]
    },
    {
      "id": "cordova-plugin-contacts.Contact-iOS",
      "file": "plugins/cordova-plugin-contacts/www/ios/Contact.js",
      "pluginId": "cordova-plugin-contacts",
      "merges": [
        "Contact"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-x-socialsharing.SocialSharing",
      "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
      "pluginId": "cordova-plugin-x-socialsharing",
      "clobbers": [
        "window.plugins.socialsharing"
      ]
    },
    {
      "id": "cordova-plugin-zxing.zxingPlugin",
      "file": "plugins/cordova-plugin-zxing/www/zxingplugin.js",
      "pluginId": "cordova-plugin-zxing",
      "clobbers": [
        "window.plugins.zxingPlugin"
      ]
    },
    {
      "id": "cordova-plugin-file-opener2.FileOpener2",
      "file": "plugins/cordova-plugin-file-opener2/www/plugins.FileOpener2.js",
      "pluginId": "cordova-plugin-file-opener2",
      "clobbers": [
        "cordova.plugins.fileOpener2"
      ]
    },
    {
      "id": "cordova-open-native-settings.Settings",
      "file": "plugins/cordova-open-native-settings/www/settings.js",
      "pluginId": "cordova-open-native-settings",
      "clobbers": [
        "cordova.plugins.settings"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.mainHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
      "pluginId": "cordova-plugin-nativestorage",
      "clobbers": [
        "NativeStorage"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.LocalStorageHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
      "pluginId": "cordova-plugin-nativestorage"
    },
    {
      "id": "cordova-plugin-nativestorage.NativeStorageError",
      "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
      "pluginId": "cordova-plugin-nativestorage"
    },
    {
      "id": "cordova-plugin-unique-device-id2.UniqueDeviceID",
      "file": "plugins/cordova-plugin-unique-device-id2/www/uniqueid.js",
      "pluginId": "cordova-plugin-unique-device-id2",
      "merges": [
        "window.plugins.uniqueDeviceID"
      ]
    },
    {
      "id": "cordova-plugin-sms-retriever.SMSRetriever",
      "file": "plugins/cordova-plugin-sms-retriever/www/SMSRetriever.js",
      "pluginId": "cordova-plugin-sms-retriever",
      "clobbers": [
        "cordova.plugins.SMSRetriever"
      ]
    },
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic",
      "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Location",
      "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.location.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.location"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Bluetooth",
      "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.bluetooth.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.bluetooth"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Wifi",
      "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.wifi.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.wifi"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Camera",
      "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.camera.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.camera"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Notifications",
      "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.notifications.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.notifications"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Microphone",
      "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.microphone.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.microphone"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Contacts",
      "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.contacts.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.contacts"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Calendar",
      "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.calendar.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.calendar"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Reminders",
      "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.reminders.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.reminders"
      ]
    },
    {
      "id": "cordova.plugins.diagnostic.Diagnostic_Motion",
      "file": "plugins/cordova.plugins.diagnostic/www/ios/diagnostic.motion.js",
      "pluginId": "cordova.plugins.diagnostic",
      "merges": [
        "cordova.plugins.diagnostic.motion"
      ]
    },
    {
      "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
      "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
      "pluginId": "phonegap-plugin-barcodescanner",
      "clobbers": [
        "cordova.plugins.barcodeScanner"
      ]
    }
  ];
  module.exports.metadata = {
    "@pkg/cordova-plugin-biometry": "0.0.1",
    "@pkg/cordova-plugin-download": "0.0.1",
    "@pkg/cordova-plugin-info": "0.0.1",
    "@tech/cordova-plugin-ios-navigation": "0.0.1",
    "@tech/cordova-plugin-screen-lock-enabled": "0.1.0",
    "cordova-plugin-add-swift-support": "2.0.2",
    "@tech/cordova-plugin-serviceOnBoardingSDK": "1.9.10",
    "@tech/cordova-plugin-soft-token": "0.0.1",
    "@tech/cordova-plugin-vu-fraud-analysis": "1.1.0",
    "@tech/cordova-universal-links-plugin": "1.2.2",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-file": "7.0.0",
    "cordova-plugin-inappbrowser": "4.1.0",
    "cordova-plugin-splashscreen": "6.0.2",
    "cordova-plugin-statusbar": "3.0.0",
    "cordova-plugin-geolocation": "4.1.0",
    "cordova-plugin-contacts": "3.0.1",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-x-socialsharing": "6.0.4",
    "cordova-plugin-zxing": "1.0.1",
    "cordova-plugin-file-opener2": "3.0.5",
    "cordova-open-native-settings": "1.5.5",
    "cordova-plugin-nativestorage": "2.3.2",
    "cordova-plugin-unique-device-id2": "2.0.0",
    "cordova-plugin-sms-retriever": "2.0.1",
    "cordova-plugin-firebasex": "14.1.0-cli",
    "cordova.plugins.diagnostic": "7.1.1",
    "phonegap-plugin-barcodescanner": "8.0.1"
  };
});