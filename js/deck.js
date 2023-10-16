'use strict';
import { Card } from './card.js'; // Relative path to Card.js

export class Deck {
  constructor() {
    this.deck = [];
    this.populateDeck();
  }

  populateDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A',
    ];

    for (let suit of suits) {
      for (let value of values) {
        let points = this.assignPoints(value);
        let imageUrl = `./cardsImg/${value}_of_${suit}.png`;
        this.deck.push(new Card(suit, value, points, imageUrl));
      }
    }
  }

  assignPoints(value) {
    switch (value) {
      case 'A':
        return 14;
      case 'K':
        return 13;
      case 'Q':
        return 12;
      case 'J':
        return 11;
      default:
        return parseInt(value, 10);
    }
  }

  getDeck() {
    return this.deck;
  }

  drawRandomCard() {
    if (this.deck.length < 1) {
      alert('The deck is empty!');
      return;
    } else {
      const random = Math.floor(Math.random() * this.deck.length);
      let randomCard = this.deck[random];
      console.log(randomCard);
      return randomCard;
    }
  }
}
