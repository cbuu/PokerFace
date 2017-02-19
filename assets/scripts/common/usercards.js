cc.Class({
    extends: cc.Component,

    properties: {
        cards:[cc.Node],
    },

    // use this for initialization
    onLoad: function () {
        
    },

    init: function (){
        var node = this.node;
    },

    beginPoke: function(prefab){
        var sprite = cc.instantiate(prefab);
        var poker = sprite.getComponent('poker');
        poker.init({num:14,style:1});
        this.node.addChild(sprite);
        sprite.setPosition(cc.p(0,0));
    
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
