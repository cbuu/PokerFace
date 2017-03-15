var Client = require('client');

var Handler = {

    createRoom : function(id, password, cb){
        var room = {
            roomid : id,
            password : password
        }
        Client.send("connector.menuHandler.createRoom", room, cb);
    },

    enterRoom : function(id,password, cb){
        var room = {
            roomid : id,
            password : password
        }

        Client.send("connector.menuHandler.enterRoom", room, cb);
    }


}

module.exports = Handler;