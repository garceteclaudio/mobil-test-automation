/*---------------------------------------------------------------------------------------------------
------------------------------------ Class FileSystemManager  ---------------------------------------
------------------------------------   author: asegalkaim  ------------------------------------------
---------------------------------------------------------------------------------------------------*/

function FileSystemManager() {
}

FileSystemManager.prototype.requestWindowFileSystem = function(onSuccess, onError) {
    window.requestFileSystem(window.TEMPORARY, 5 * 1024 * 1024, function (fs) {
        onSuccess(fs.root);
    }, function(err) {
        onError(err);
    });
}

FileSystemManager.prototype.saveFile = function(dirEntry, fileName, onSuccess, onError) {
    var options = { 
        create: true,
        exclusive: false 
    };

    dirEntry.getFile(fileName, options, function (fileEntry) {
        onSuccess(fileEntry);
    }, function(err) {
        onError(err);
    });
}

FileSystemManager.prototype.writeFile = function(fileEntry, dataObj, onSuccess, onError) {
    fileEntry.createWriter(function(fileWriter) {
        fileWriter.onwriteend = function(file) {
            onSuccess(file);
        };
        fileWriter.onerror = function(err) {
            onError(err);
        };

        fileWriter.write(dataObj);
    });
}

FileSystemManager.prototype.isValid = function() {
    return isFunction(window.requestFileSystem);
}