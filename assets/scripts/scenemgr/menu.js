var Client = require('client');

cc.Class({
    extends: cc.Component,

    properties: {
        roomid : cc.EditBox,
        password : cc.EditBox,
        btn_start:cc.Button,
        btn_create:cc.Button,
    },

    // use this for initialization
    onLoad: function () {
        Client.init();
    },

    enterRoom: function(){
        Client.send("wocao");
    },

    createRoom : function(){

    }
});
