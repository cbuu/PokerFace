var Suit = cc.Enum({
    Spade: 0,
    Heart: 1,
    Club: 2,
    Diamond: 3,
    Joker: 4
});

var A2_JQK = "JOKER,A,2,3,4,5,6,7,8,9,10,J,Q,K".split(',');

//if it is joker , point is 1 or 2 and suit is Joker = 4
function Card (suit,point){
    Object.defineProperties(this,{
        point:{
            value: point,
            writable: false
        },
        suit: {
            value: suit,
            writable: false
        },

        id: {
            value: suit * 13 + point - 1,  // 0 - 52
            writable: false
        },

        pointName: {
            get: function(){
                if(suit === 4 ){
                    return A2_JQK[0];
                }else{
                    return A2_JQK[this.point]
                }
            }
        },

        suitName: {
            get: function(){
                return Suit[this.suit];
            }
        },

        isBlack:{
            get: function(){
                return this.suit === Suit.Spade || this.suit === Suit.Club;
            }
        },

        isRed: {
            get : function(){
                return this.suit === Suit.Heart || this.suit === Suit.Diamond;
            }
        },

    });
}

Card.prototype.toString = function(){
    return this.suitName + " " + this.pointName;
}

var cards = new Array(54);

Card.fromId = function (id){
    return cards[id];
}

(function createCards(){
    for(var i = 0; i < 4; i++){
        for(var j = 1;j<=13;j++){
            var card = new Card(i,j);
            cards[card.id] = card;
        }
    }
    var joker1 = new Card(1,Suit.Joker);//红鬼
    var joker2 = new Card(2,Suit.Joker);//黑鬼
    cards[52] = joker1;
    cards[53] = joker2
})();


var ActorPlayingState = cc.Enum({
 
});

var Outcome = cc.Enum({
    Win:-1,
    Lose:-1,
    Ping:-1,
});

module.exports = {
    Suit:Suit,
    Card:Card,
    ActorPlayingState: ActorPlayingState,
    Outcome: Outcome,
}