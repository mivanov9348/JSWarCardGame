'use strict';

//Import
import { Deck } from './deck.js';
import { Player } from './player.js';

//Get elements
const playerCardBack = document.querySelector('.player-cardBack');
const playerCardFace = document.querySelector('.player-cardFace');
const pcCardFace = document.querySelector('.pc-cardFace');
const pcCardBack = document.querySelector('.pc-cardBack');
const resultEl = document.querySelector('.result');
const startBtn = document.querySelector('.startButton');
const pcName = document.querySelector('.pcName');
const playerName = document.querySelector('.playerName');
const playerNameInput = document.querySelector('.playerNameInput');
const resetBtn = document.querySelector('.reset');

//State
hideCards();

//function

startBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (playerNameInput.value) {
    //buttons
    playerCardBack.style.display = 'inline';
    pcCardBack.style.display = 'inline';
    playerNameInput.style.display = 'none';
    startBtn.style.display = 'none';

    //GenerateDeck
    let deck = new Deck();
    let sorted = deck.cards.sort((a, b) => a.id - b.id);
    console.log(sorted);

    //Generate Player
    let player = new Player(playerNameInput.value);
    player.DealingHand(deck);
    let pcPlayer = new Player('PC');
    pcPlayer.DealingHand(deck);
    playerName.textContent = player.name;
    pcName.textContent = pcPlayer.name;

    //GenerateDeck
  } else {
    alert('You must add a name!');
  }
});

resetBtn.addEventListener('click', function (e) {
  e.preventDefault();
  hideCards();
  playerNameInput.style.display = 'inline';
  playerNameInput.placeholder = 'Player Name';
  startBtn.style.display = 'inline';
  playerName.textContent = '';
  pcName.textContent = '';
});

function hideCards() {
  playerCardBack.style.display = 'none';
  playerCardFace.style.display = 'none';
  pcCardBack.style.display = 'none';
  pcCardFace.style.display = 'none';
}
