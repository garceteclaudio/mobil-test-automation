/*---------------------------------------------------------------------------------------------------
------------------------------------ Class FileOpenerManager  ---------------------------------------
------------------------------------   author: asegalkaim  ------------------------------------------
---------------------------------------------------------------------------------------------------*/

function FileOpenerManager(url, filename, loadAnimation, baseUrl) {
    this._fileSystem = new FileSystemManager();

    this.HEADER_FILE_B64 = ';base64,';
    this._url = url;
    this._filename = filename;
    this._baseUrl = baseUrl ? baseUrl : '';

    this._fileType = this.getFileType();
    this._loadAnimation = loadAnimation;
    this.onErrorOpenAttachment = function(onError) {
        //Find i18n for frontend.mobile.file.download.error
         var errorMessage = "No ha sido posible abrir el archivo adjunto, por favor intente nuevamente.";
        if (loadAnimation){
            convivence.evolutive.hideLoader();
        }
        convivence.evolutive.showMessage(errorMessage, 'error');
        
    }
    
}

FileOpenerManager.prototype.openAttachment = function() {
    var self = this;

    if (!self.isValid()) {
        self.onErrorOpenAttachment();
        return;
    }

    if (!isMobile()) {
        goToPage(url);
        return;
    }

    if (this._loadAnimation){
        convivence.evolutive.showLoader();
    }

    self.getFile(function(fileData) {
        self._fileSystem.requestWindowFileSystem(function(dirEntry) {

            self._fileSystem.saveFile(dirEntry, self._filename, function(fileEntry) {

                self._fileSystem.writeFile(fileEntry, fileData, function() {

                    self.openFile(fileEntry.nativeURL, self.onErrorOpenAttachment);

                }, self.onErrorOpenAttachment);

            }, self.onErrorOpenAttachment);

        }, self.onErrorOpenAttachment);

    }, self.onErrorOpenAttachment);
}

FileOpenerManager.prototype.getFile = function(onSuccess, onError) {
    var self = this;

    if(this.isB64(self._url)){
        var blob = this.b64toBlob(self._url);
        onSuccess(blob);
    }else{
        fetch(self._baseUrl + self._url, {
            method: 'POST',
            credentials: "include"
        })
        .then(function (response) {
            return response.blob();
        })
        .then(function (blob) {
            onSuccess(blob);
        })
        .catch(function () {
            console.log("Error descarga de archivo");
            onError();
        });
    }
}

FileOpenerManager.prototype.isB64 = function (url) {
    return url.indexOf(this.HEADER_FILE_B64) >= 0;
}

FileOpenerManager.prototype.b64toBlob = function (b64) {
    
    var byteString = atob(b64.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: this.getFileType() });
}

FileOpenerManager.prototype.getFileExtension = function() {
    if (!isString(this._filename)) {
        return undefined;
    }

    var filename = this._filename;
    var pos = filename.lastIndexOf('.');
    if (pos === -1) {
        return undefined;
    }

    return filename.substring(pos + 1);
}

FileOpenerManager.prototype.getFileType = function() {
    var extension = this.getFileExtension();

    if (!isString(extension)) {
        return undefined;
    }

    if (extension === 'png' ||
            extension === 'jpg' ||
            extension === 'gif' ||
            extension === 'bmp') {

        return 'image/' + extension;

    } else if (extension === 'pdf') {

        return 'application/' + extension;

    } else if (extension === 'doc' ||
        extension === 'docx') {

        return 'application/msword';

    } else if (extension === 'ppt' ||
        extension === 'pptx') {

        return 'application/vnd.ms-powerpoint';

    } else if (extension === 'xls' ||
        extension === 'xlsx') {

        return 'application/vnd.ms-excel';

    } else if (extension === 'txt') {

        return 'text/plain';

    }

    return undefined;
}

FileOpenerManager.prototype.getOpenMethod = function(url, onError) {
    var openMethod = 'open';
    if (isAppleDevice()) {
        openMethod = 'showOpenWithDialog';
    }
    return openMethod;
}

FileOpenerManager.prototype.openFile = function(url, onError) {
    var self = this;
 
    var openMethod = this.getOpenMethod();
try{ 
    window.cordova.plugins.fileOpener2[openMethod](
        url,
        self._fileType,
        { 
            error : function(err) { 
                onError(err);
            },
            success : function () {
                if (self._loadAnimation){
                    convivence.evolutive.hideLoader();
                }
            }
        }
    );
   }catch(err){  
        console.log("Error Occured While Writing File", err);
   };   
}

FileOpenerManager.prototype.isValid = function() {
    if (!isString(this._url)) {
        return false;
    }
    if (!isString(this._filename)) {
        return false;
    }

    if (!isString(this._fileType)) {
        return false;
    }

    if (!this._fileSystem || !this._fileSystem.isValid()) {
        return false;
    }

    if (typeof(window.cordova.plugins.fileOpener2) === typeof(undefined) ||
        !isFunction(window.cordova.plugins.fileOpener2[this.getOpenMethod()])) {
        return false;
    }

    return true;
}
function isString(str) {
    return typeof (str) === typeof ('');
}
function isFunction(fnc) {
    return typeof (fnc) === typeof (function () {});
}

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || isAppleDevice()) {
        return true;
    }
}

function isAppleDevice() {
    return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
}

/**
 * Intended to manage comunication between Redisenio and Evolutivo.
 * Trigger in and out JS events.
 */

var convivence = {
    _handledEvents: new Map(),
    _callbacksHolder: new Map(),
    _debug: false,

    listeners: {
        REQUEST_DATA: "convivence.rediseno.data.request",
        RECEIVE_EVOLUTIVE_DATA: "convivence.rediseno.data.receive",
        FILE_MANAGER_OPEN_ATTACHMENT: "convivence.rediseno.filemanager.openattachment"
    },

    _dataCollectors: {
        PLACE_HOLDER: "data.collect.place.holder"
    },

    evolutiveData: {
        events: {
            REQUEST_DATA: "convivence.evolutive.data.request",
            RECEIVE_REDISENO_DATA: "convivence.evolutive.data.receive",
            SHOW_LOADER: "convivence.evolutive.loader.show",
            HIDE_LOADER: "convivence.evolutive.loader.hide",
            SHOW_TOAST_MESSAGE: "convivence.evolutive.ui.toast.show",
        },

        dataCollectors: {
            USER_MADE_ANY_ACTION: "data.collect.session.userMadeAnyAction"
        }
    },

    initialize: function () {
        convivence._registerPostMessageEventHandler();
        convivence._registerEventListeners();
    },

    /**
     * Triggers a registered event.
     *
     * @param eventName: String
     * @param data: JSON
     */
    triggerEvent: function (eventName, data) {
        var event = convivence._handledEvents.get(eventName);
        if( event === undefined ){
            convivence._log("There is no event name: " + eventName);
            return;
        }

        return event(data);
    },

    /**
     * Sends an event to evolutive.
     */
    triggerPostEvent: function (eventName, data) {
        convivence._getDestinationElement().postMessage(
            {
                eventName: eventName,
                data: data
            },
            convivence._getDestinationOrigin()
        );
    },

    _getDestinationElement: function () {
        return convivence._getDestinationIframe().contentWindow;
    },

    _getDestinationOrigin: function () {
        var iframe = convivence._getDestinationIframe();
        var iframeUrl = new URL( iframe.src );
        return iframeUrl.origin;
    },

    _getDestinationIframe: function () {
        return document.getElementsByTagName("iframe")[0];
    },

    _registerPostMessageEventHandler: function () {
        window.addEventListener('message', convivence._eventListenerHandler, false);
    },

    _eventListenerHandler: function (event) {
        if( !event || !event.data || !event.data.eventName){
            convivence._log("Unregistered event has been triggered!");
            convivence._log(event);
            convivence._log(event.data);
            return;
        }

        convivence.triggerEvent(event.data.eventName, event.data.data);
    },

    _registerEventListeners: function () {
        convivence._registerNewEventListener(convivence.listeners.REQUEST_DATA, convivence._requestDataEvent);
        convivence._registerNewEventListener(convivence.listeners.RECEIVE_EVOLUTIVE_DATA, convivence._receiveEvolutiveDataEvent);
        convivence._registerNewEventListener(convivence.listeners.FILE_MANAGER_OPEN_ATTACHMENT, convivence._fileManagerOpenAttachment);
    },

    _registerNewEventListener: function (listenerName, listenerFunction) {
        convivence._handledEvents.set(listenerName, listenerFunction);
    },

    /**
     * Collects data from the environment to be sent via message.
     *
     * @param dataCollectorQualifier - A String key Mapped on "convivence._dataCollectors"
     * (Only registered key data can be collected)
     * @returns Any data
     */
    _dataCollector: function (dataCollectorQualifier) {
        var returnData = undefined;
        switch (dataCollectorQualifier) {
            case convivence._dataCollectors.PLACE_HOLDER:
                returnData = "place holder";
                break;
            default:
                convivence._log("Data collector inexistent for: " + dataCollectorQualifier);
        }
        return returnData;
    },

    _registerCallback: function (callback, callbackId) {
        if(callbackId === undefined){
            callbackId = convivence._generateCallbackId();
        }

        convivence._callbacksHolder.set(callbackId, callback);

        return callbackId;
    },

    _generateCallbackId: function () {
        return new Date().getTime();
    },

    _triggerCallback: function (callbackId, data) {
        var callback = convivence._callbacksHolder.get(callbackId);
        if( !callback ){
            convivence._log("Callback inexistent for: " + callbackId);
            return;
        }

        convivence._callbacksHolder.delete(callbackId);

        callback(data);
    },

    _log: function (toLog) {
        if( convivence._debug ){
            var prefix = "[REDISENO] ";
            toLog = ( (typeof toLog === "string") ? (prefix + toLog) : toLog );
            console.log( toLog );
        }
    },

    //##### Listener Events #####
    _requestDataEvent: function (data) {
        var sendData = convivence._dataCollector(data.collector);
        convivence.evolutive.sendRedisenoData(sendData, data.callbackId);
    },

    _receiveEvolutiveDataEvent: function (data) {
        if(data.callbackId === undefined){
            convivence._log("Receiving data event but not a callbackId");
            convivence._log(data);
            return;
        }

        convivence._triggerCallback(data.callbackId, data.data);
    },

    _fileManagerOpenAttachment: function (data) {
        new FileOpenerManager(data.url, data.fileName, data.showLoader).openAttachment();
    },
    //##### END Listener Events #####

    //##### Parent Dispacher Events #####
    evolutive: {
        requestData:function (dataCollector, callback) {
            convivence.triggerPostEvent(
                convivence.evolutiveData.events.REQUEST_DATA,
                {
                    collector: dataCollector,
                    callbackId: convivence._registerCallback(callback)
                }
            );
        },

        sendRedisenoData: function (sendData, callbackId) {
            convivence.triggerPostEvent(
                convivence.evolutiveData.events.RECEIVE_REDISENO_DATA,
                {
                    data: sendData,
                    callbackId: callbackId
                }
            )
        },

        showLoader: function () {
            convivence.triggerPostEvent(convivence.evolutiveData.events.SHOW_LOADER);
        },

        hideLoader: function () {
            convivence.triggerPostEvent(convivence.evolutiveData.events.HIDE_LOADER);
        },

        showMessage: function (message, messageType) {
            convivence.triggerPostEvent(
                convivence.evolutiveData.events.SHOW_TOAST_MESSAGE,
                {
                    message: message,
                    messageType: messageType
                }
            );
        },

        checkUserActivity: function (callback) {
            convivence.evolutive.requestData(
                convivence.evolutiveData.dataCollectors.USER_MADE_ANY_ACTION,
                callback
            )
        }
    }
    //##### END Parent Dispacher Events #####
}

