import {MD5} from "./plugin/md5"
import version from "./version"
class Webfont {
    private protocol: string = "https";
    private version: string = version;
    public CdnServer: string = "//cdn.webfont.youziku.com/selectors/webUrl/"
    load(tag: string, accessKey:string, option:any) {
        //console.log(version);
        let md5 = new MD5();
        //console.log("tag",md5.hex_md5("xx"),md5.b64_md5("xx"))
        //alert(md5.hex_md5("xx"));
    }
    draw() {

    }
}


let $webfont = new Webfont();
export default $webfont;
declare var window: any;
window["$webfont"] = $webfont;
window["$youziku"] = $webfont;