//import {Ajax} from "./ajax";

import {Option} from "./option";
class Webfont extends Option {
    load(tag: string, accessKey:string, option:any) {
        this.X = "xx";
    }
    draw() {

    }
}

let $webfont = new Webfont();

declare var window: any;
window["$webfont"] = $webfont;
window["$youziku"] = $webfont;