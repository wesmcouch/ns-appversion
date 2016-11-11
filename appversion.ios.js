"use strict";
var AppVersion = (function () {
    function AppVersion() {
    }
    AppVersion.prototype.getApplicationVersion = function () {
        var version = NSBundle.mainBundle().objectForInfoDictionaryKey("CFBundleShortVersionString");
        return version;
    };
    return AppVersion;
}());
exports.AppVersion = AppVersion;
