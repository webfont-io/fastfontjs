import {MD5} from "./plugin/md5"
class Webfont {
    private protocol:string = "https";
    private version:string = "1.0.1";
    load(tag: string, accessKey:string, option:any) {
        let md5 = new MD5();
        console.log("tag",md5.hex_md5("xx"),md5.b64_md5("xx"))
    }
    draw() {

    }
}


let $webfont = new Webfont();
export default $webfont;
declare var window: any;
window["$webfont"] = $webfont;
window["$youziku"] = $webfont;