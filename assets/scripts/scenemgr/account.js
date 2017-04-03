var Client = require('client');
var RequestGenerator = require('RequestGenerator');

cc.Class({
    extends: cc.Component,

    properties: {
        field_username : cc.EditBox,
        field_password : cc.EditBox,
        btn_login:cc.Button,
        btn_register:cc.Button,
    },

    // use this for initialization
    onLoad: function () {
        Client.init();
    },

    login:function(){
        var username = this.field_username.string;
        var password = this.field_password.string;
        var request = RequestGenerator.genLoginReq(123,"iori",username,password);
        Client.send(JSON.stringify(request));
    },

    register:function(){
        var username = this.field_username.string;
        var password = this.field_password.string;
        var request = RequestGenerator.genRegisterRequest(123,"iori",username,password);
        Client.send(JSON.stringify(request));
    },

});
