import { Deck } from './deck.js';

export class Player {
  constructor(name, isTurn) {
    this.name = name;
    isTurn = false;
    this.cards = [];
  }

  addCardsToHand(winningCards) {
    winningCards.forEach(x => this.cards.push(x));
  }

  DealingHand(deck) {
    let cards = deck.getDeck();
    let cardsInHand = cards.length / 2;

    for (let i = 0; i < cardsInHand; i++) {
      let dealedCard = cards[Math.floor(Math.random() * cards.length)];
      cards.find(card => card.id == dealedCard.id).dealed = true;
      this.cards.push(dealedCard);
    }
  }

  drawACard() {
    let drawedCard = this.cards[0];
    this.cards.splice(this.cards[0], 1);
    return drawedCard;
  }

  drawThreeCards() {
    let threeCards = this.cards.splice(this.cards[0], 3);
    return threeCards;
  }

  getDeck() {
    return this.cards;
  }

  getCardsCount() {
    return this.cards.length;
  }
}
