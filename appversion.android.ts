import application = require("application");
 
declare var android: any;
declare var java: any;
 
export class AppVersion {
 
    public constructor() { }
 
    public getApplicationVersion(): string {
        let PackageManager = android.content.pm.PackageManager;
        let pkg = application.android.context.getPackageManager().getPackageInfo(application.android.context.getPackageName(), PackageManager.GET_META_DATA);
        return java.lang.Integer.toString(pkg.versionCode);
    }
 
}