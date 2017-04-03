var host = "127.0.0.1";
var port = "3010";

var ws;

var callBacks = {};
var reqId = 0;
var initCallback = null;
var reconnectUrl = null;

var reconnect = false;
var reconncetTimer = null;
var reconnectUrl = null;
var reconnectAttempts = 0;
var reconnectionDelay = 5000;
var DEFAULT_MAX_RECONNECT_ATTEMPTS = 10;  

var reset = function() {
    reconnect = false;
    reconnectionDelay = 1000 * 5;
    reconnectAttempts = 0;
    clearTimeout(reconncetTimer);
};

var connect = function(params,url,cb){
    cc.log('connect to ' + url);

    var params = params || {};
    reconnectUrl = url;
    var onopen = function(event) {
      reset();
    };
    var onmessage = function(event) {
      processPackage(Package.decode(event.data), cb);
      // new package arrived, update the heartbeat timeout
      if(heartbeatTimeout) {
        nextHeartbeatTimeout = Date.now() + heartbeatTimeout;
      }
    };
    var onerror = function(event) {
      pomelo.emit('io-error', event);
      console.error('socket error: ', event);
    };
    var onclose = function(event) {
      pomelo.emit('close',event);
      pomelo.emit('disconnect', event);
      console.error('socket close: ', event);
      if(!!params.reconnect && reconnectAttempts < maxReconnectAttempts) {
        reconnect = true;
        reconnectAttempts++;
        reconncetTimer = setTimeout(function() {
          connect(params, reconnectUrl, cb);
        }, reconnectionDelay);
        reconnectionDelay *= 2;
      }
    };
    socket = new WebSocket(url);
    socket.binaryType = 'arraybuffer';
    socket.onopen = onopen;
    socket.onmessage = onmessage;
    socket.onerror = onerror;
    socket.onclose = onclose;
}

var client = {
    init : function (param,cb){
        initCallback = cb;
        var host = param.host;
        var port = param.port;
        var url = "ws://" + host + ":"+port + "/pokerserver";
        connect(params,url,cb); 
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