import {MD5} from "./plugin/md5"
import version from "./version"
class Webfont {
    private _protocol: string = "https";
    private _version: string = version;
    public CDNServer: string = "//cdn.webfont.youziku.com/selectors/webUrl/"
    public APIServer: string = "//api.youziku.com/webfont/fastjsPost"
    load(tag: string, accessKey: string, option:any) {
        //console.log(version);
        let md5 = new MD5();
        //console.log("tag",md5.hex_md5("xx"),md5.b64_md5("xx"))
        //alert(md5.hex_md5("xx"));
        //根据一组key加载js文件
    }
    draw() {
        console.log(this);
    }
    include(accessKey: string,md5: string) {

    }
}


let $webfont = new Webfont();

export default $webfont;
declare var window: any;
window["$webfont"] = $webfont;
window["$youziku"] = $webfont;