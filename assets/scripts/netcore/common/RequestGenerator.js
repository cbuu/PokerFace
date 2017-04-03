var genRequest = function(type,msg){
    var base = {};
    base.classType = type;
    base.baseMessage = msg;
    return base;
}

var RequestGenerator = {

    genRegisterRequest : function(sessionId,from,username,password){
        var msg = {};
        msg.from = from;
        msg.sessiongId = sessionId;
        msg.username = username;
        msg.password = password;
        return genRequest("RegisterRequest",msg);
    },

    genLoginReq : function(sessionId,from,username,password){
        var msg = {};
        msg.from = from;
        msg.sessiongId = sessionId;
        msg.username = username;
        msg.password = password;
        return genRequest("LoginRequest",msg);
    },

    genCreateRoomReq : function(sessionId,from,roomId,password){
        var msg = {};
        msg.from = from;
        msg.sessiongId = sessionId;
        msg.roomId = roomId;
        msg.password = password;
        return genRequest("CreateRoomRequest",msg);
    },

    genEnterRoomReq : function(sessionId,from,roomId,password){
        var msg = {};
        msg.from = from;
        msg.sessiongId = sessionId;
        msg.roomId = roomId;
        msg.password = password;
        return genRequest("EnterRoomRequest",msg);
    },
}

module.exports = RequestGenerator;
