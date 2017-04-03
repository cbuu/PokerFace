var Client = require('client');

var UserInfo = {

}

var Handler = {

    register : function(id, password, cb){
        var room = {
            roomid : id,
            password : password
        }
        Client.send("RegisterRequest", room, cb);
    },

    login : function(id,password, cb){
        var room = {
            roomid : id,
            password : password
        }

        Client.send("connector.menuHandler.enterRoom", room, cb);
    }


}

module.exports = Handler;