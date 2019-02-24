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
        console.log("draw");  
        let url = this._protocol + this.CDNServer + "0f397e2e65199ddf0032e6ade14e7f81.js";
        //var script = document.createElement("script");
        //script.type = "text/javascript";
        //script.src = 
        document.writeln("<script type='text/javascript' src='" + url + "'></script>");
        
        //document.getElementsByTagName("head")[0].appendChild(script);
    }
    include(accessKey: string,md5: string) {

    }
    css(content: string){
        var d = document;
        var headDom = d.getElementsByTagName("head")[0];
        //create style append head
        var t = d.createElement("style");
        t.setAttribute("type", "text/css");
        headDom.appendChild(t);
        if (t.styleSheet) {
            t.styleSheet.cssText = content;
        } else if (d.getBoxObjectFor) {
            t.innerHTML = content;
        } else {
            t.appendChild(d.createTextNode(content));
        }
    }

    applyFontface(){

    }

    verify() {
      console.log("verify");  
    }
}


let $webfont = new Webfont();

export default $webfont;
declare var window: any;
window["$webfont"] = $webfont;
window["$youziku"] = $webfont;
console.log("init");  