'use strict';

//Import
import { Deck } from './deck.js';

//Get elements
let cardsDiv = document.querySelector('.cards');
let cardBackImg = document.querySelector('.cardBack');
let cardFaceImg = document.querySelector('.cardFace');
let drawedCardPoint = document.querySelector('.cardPoints');

//events
cardBackImg.addEventListener('click', DrawRandomCard);

const myDeck = new Deck();

function updateDOMWithCard(card) {
  let cardFaceImg = document.querySelector('.cardFace');
  cardFaceImg.src = card.imageUrl;
  drawedCardPoint.textContent = card.points;
}

function DrawRandomCard() {
  const drawnCard = myDeck.drawRandomCard();
  if (drawnCard) {
    updateDOMWithCard(drawnCard);
  }
}
