/// <reference path="../../../creator.d.ts"/>
cc.Class({
    extends: cc.Component,

    properties: {
        poker:{
            default:null,
            type:cc.Prefab,
        },
        usercards:cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.usercardsCp = this.usercards.getComponent('usercards');
        this.usercardsCp.init();
        this.usercardsCp.beginPoke(this.poker);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
