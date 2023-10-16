import { Deck } from './deck.js';

export class Player {
  constructor(name, isTurn) {
    this.name = name;
    isTurn = false;
    this.cards = [];
  }

  startTurn() {
    this.isTurn = true;
  }

  endTurn() {
    this.isTurn = false;
  }

  DealingHand(deck) {
    let cards = deck.getDeck();
    let cardsInHand = cards.length / 2;

    for (let i = 0; i < cardsInHand; i++) {
      let drawedCard = cards[Math.floor(Math.random() * cards.length)];
      cards.find(card => card.id == drawedCard.id).dealed = true;
      this.cards.push(drawedCard);
    }
  }

  drawACard() {
    return this.cards[0];
  }
}
