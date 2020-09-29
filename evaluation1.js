"use strict";
let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
let ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
class Deck {
    constructor(suits, ranks) {
        this.deck = [];
        this.suits = suits;
        this.ranks = ranks;
        for (let suit in suits) {
            for (let value in ranks) {
                this.deck.push(`${ranks[value]} of ${suits[suit]}`);
            }
        }
    }
    shuffle() {
        const deck = this.deck;
        let len = deck.length - 1;
        while(len) {
            let i = Math.floor(Math.random() * len );
            len--;
            let temp = deck[len];
            deck[len] = deck[i];
            deck[i] = temp;
        }
        return this.deck;
    }
    deal(limit) {
        return this.deck.splice(1,limit);
    }
}
const deck1 = new Deck(suits, ranks);
//console.log(deck1.deck);
deck1.shuffle();
//console.log(deck1.deck); 
deck1.deal(5);
//console.log(deck1.deck);

let name = ["shu","has"];
class Hand extends Deck {
    constructor(label) {
        super(label);
    }

    display() {
        for (let i = 0; i < this.card.length; i++) {
            console.log(this.Card[i]);
        }
        console.log();
    }

} 

class Player extends Deck {
    constructor(name) {
        super(suits, ranks);
        this.name = name;
        this.hand = Hand();
    }
    Player() {
        this.name = name;
        this.hand = new Hand(name);
    }
    String() {
        return this.name;
    }
    Hand() {
        return this.hand;
    }
    play(eights, prev) {
        let card = this.searchForMatch(prev);
        if (card === null) {
            card = this.drawForMatch(eights, prev);
        }
        return card;
    }
    searchForMatch(prev) {
        for (let i = 0; i < this.hand.length; i++) {
            let card = this.hand.getCard(i);
            if (this.cardMatches(card, prev)) {
                return this.hand.popCard(i);
            }
        }
        return null;
    }
    drawForMatch(eights, prev) {
        while (true) {
            let card = eights.draw();
            console.log(`${this.name} + " draws " + ${card}`);
            if (this.cardMatches(card, prev)) {
                return card;
            }
            this.hand.addCard(card);
        }
    } 
    
    score() {
        let sum = 0;
        for (let i = 0; i < this.hand.length; i++) {
            let card = this.hand.getCard(i);
            ranks = card.getRank();
            if (ranks === 8) {
                sum -= 20;
            } else if (ranks > 10) {
                sum -= 10;
            } else {
                sum -= ranks;
            }
        }
        return sum;
    }
    display() {
        this.hand.display();
    }
    displayScore() {
        console.log(this.score());
    }

}
const play = new Player(name);
play.String();
console.log(play.Player);

