"use strict";
var application = require("application");
var AppVersion = (function () {
    function AppVersion() {
    }
    AppVersion.prototype.getApplicationVersion = function () {
        var PackageManager = android.content.pm.PackageManager;
        var pkg = application.android.context.getPackageManager().getPackageInfo(application.android.context.getPackageName(), PackageManager.GET_META_DATA);
        return java.lang.Integer.toString(pkg.versionCode);
    };
    return AppVersion;
}());
exports.AppVersion = AppVersion;
