var pomelo = require("./lib/pomelo/pomelo-client.js");

cc.Class({
    extends: cc.Component,

    properties: {
        btn_start:{
            default:null,
            type: cc.Button,
        },
    },

    // use this for initialization
    onLoad: function () {
    
    },

    test: function(){
        var client = pomelo.init({
            host: "127.0.0.1",
            port: "3010",
            user: {},
            handshakeCallback : function(){},
            function () {
                console.log('success');
            }
        });
    },
});
