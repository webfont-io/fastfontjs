import {Ajax} from "./ajax";
let ajax = new Ajax();
ajax.Request("POST", "https://cdn.wf.youziku.com/fonts/100.html", true,"", function(data: any){
    console.log("ok",data)
},function(){
    console.log("fail")
})
console.log("Te");