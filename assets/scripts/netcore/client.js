var host = "127.0.0.1";
var port = "3010";

var ws;

var client = {
    init : function (){
        ws = new WebSocket("ws://" + host + ":8080/websocket");
        ws.onopen = function(event){
            cc.log("open");
        };

        ws.onmessage = function(event){
            cc.log("on onmessage " + event.data);
        };

        ws.onerror = function(event){
            cc.log("onerror");
        };

        ws.onclose = function(event){
            cc.log("onclose");
        };
    },


    send : function (msg){
        if(ws.readyState === WebSocket.OPEN){
            ws.send(msg)
        }else{
            cc.log("not ready");
        }
    },
}


module.exports = client;