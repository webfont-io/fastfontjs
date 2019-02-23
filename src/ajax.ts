function getAjax(){
    var XmlHttp;
    if (window.hasOwnProperty("ActiveXObject")) {
        var arr = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.5.0",
            "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp"];
        for (var i = 0; i < arr.length; i++) {
            try {
                XmlHttp = new ActiveXObject(arr[i]);
                return XmlHttp;
            }
            catch (error) { }
        }
    }
    else {
        try {
            XmlHttp = new XMLHttpRequest();
            return XmlHttp;
        }
        catch (otherError) { }
    }
}

export class Ajax {
    Request(method:string, url:string, isAsync:boolean, data:any, callback:any, failcallback:any){
        let xobj = getAjax();
        try{
            xobj.open(method, url, isAsync);
            if (method === "POST" || method === "post") {
                xobj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
                xobj.onreadystatechange = function () {
                    if (xobj.readyState === 4) {
                        if (xobj.status === 200 || xobj.status === 304) {
                            callback(xobj.responseText);
                        } else if (xobj.status === 404) {
                            failcallback();
                        }
                    }
                };
                xobj.send(data);
            }
        } catch (e) {

        }
    }
}