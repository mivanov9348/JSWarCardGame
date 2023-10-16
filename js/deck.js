'use strict';

import { Card } from './card.js'; // Relative path to Card.js

let cardId = 0;

export class Deck {
  constructor() {
    this.cards = [];
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
        cardId++;
        let points = this.assignPoints(value);
        let imageUrl = `./cardsImg/${value}_of_${suit}.png`;
        let id = cardId;
        this.cards.push(new Card(id, suit, value, points, false, imageUrl));
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
    return this.cards;
  }
}
