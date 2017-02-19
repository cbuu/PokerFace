cc.Class({
    extends: cc.Component,

    properties: {
        num: 1,
        style: 1,
        img_number:cc.Node,
        img_style:cc.Node,
        img_joker:cc.Node,
        //res
        black_numbers:[cc.SpriteFrame],
        red_numbers:[cc.SpriteFrame],
        styles:[cc.SpriteFrame],
        jokers:[cc.SpriteFrame],
    },

    // use this for initialization
    onLoad: function () {

    },

    init: function(card){
        var sp_number = this.img_number.getComponent('cc.Sprite');
        var sp_style = this.img_style.getComponent('cc.Sprite');
        var sp_joker = this.img_joker.getComponent('cc.Sprite');
        cc.log(sp_joker);
        this.num = card.num;
        this.style = card.style;
        
        var isJoker = this.num > 13;
        if(isJoker){
            if(this.style == 1){
                sp_joker.spriteFrame = this.jokers[0];
            }else{
                sp_joker.spriteFrame = this.jokers[1];
            }
            this.node.removeChild(this.img_number);
            this.node.removeChild(this.img_style);
        }else {
            
            sp_style.spriteFrame  = this.styles[this.style - 1];
            if(this.style == 1 || this.style == 3){
                sp_number.spriteFrame = this.red_numbers[this.num - 1];
            }else{
                sp_number.spriteFrame = this.black_numbers[this.num - 1];
            }
            this.node.removeChild(this.img_joker);
        }
        cc.log('wpcap');
        
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
