class Webfont {
    private protocol:string = "https"
    private version:string = "1.0.1";
    load(tag: string, accessKey:string, option:any) {
        console.log("tag")
    }
    draw() {

    }
}


let $webfont = new Webfont();


declare var window: any;
window["$webfont"] = $webfont;
window["$youziku"] = $webfont;