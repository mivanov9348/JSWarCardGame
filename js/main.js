'use strict';

//Import
import { Deck } from './deck.js';
import { Player } from './player.js';
import { Game } from './game.js';

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
const pcCardsCountP = document.querySelector('.pcCardsCount');
const playerCardsCountP = document.querySelector('.playerCardsCount');
const playerThreeCardsSide = document.querySelector('.playerSide-card-stack');
const pcThreeCardsSide = document.querySelector('.pcSide-card-stack');

//State
hideCards();
let game;
let player;
let pcPlayer;
let roundCards = [];
//function

startBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (playerNameInput.value) {
    //buttons
    resetBtn.style.display = 'inline';

    playerCardBack.style.display = 'inline';
    pcCardBack.style.display = 'inline';
    playerNameInput.style.display = 'none';
    startBtn.style.display = 'none';

    playerCardFace.style.display = 'inline';
    pcCardFace.style.display = 'inline';

    //GenerateDeck
    let deck = new Deck();

    //Generate Players
    player = new Player(playerNameInput.value);
    player.DealingHand(deck);
    playerName.textContent = player.name;
    playerCardsCountP.textContent = player.getCardsCount();

    pcPlayer = new Player('PC');
    pcPlayer.DealingHand(deck);
    pcName.textContent = pcPlayer.name;
    pcCardsCountP.textContent = pcPlayer.getCardsCount();

    //generateGame
    game = new Game();
    game.startGame(player, pcPlayer);
  } else {
    alert('You must add a name!');
  }
});

playerCardBack.addEventListener('click', function (e) {
  e.preventDefault();
  let playerCard;
  let pcCard;

  playerThreeCardsSide.style.display = 'none';
  pcThreeCardsSide.style.display = 'none';

  playerCard = player.drawACard();
  playerCardFace.style.display = 'inline';
  playerCardFace.src = `/cardsImg/${playerCard.value}_of_${playerCard.suit}.png`;

  playerCardBack.style.pointerEvents = 'none';

  setTimeout(() => {
    pcCard = pcPlayer.drawACard();
    pcCardFace.style.display = 'inline';
    pcCardFace.src = `/cardsImg/${pcCard.value}_of_${pcCard.suit}.png`;
    defineRoundWinner(playerCard, pcCard);
  }, 1000);
});

const defineRoundWinner = function (playerCard, pcCard) {
  game.roundCards.push(playerCard);
  game.roundCards.push(pcCard);

  game.defineWinnerHand();
  playerCardBack.style.pointerEvents = 'auto';

  if (playerCard.points !== pcCard.points) {
    setTimeout(() => {
      playerCardFace.src = `/cardsImg/red_joker.png`;
      pcCardFace.src = `/cardsImg/black_joker.png`;
    }, 1000);
  }

  playerCardsCountP.textContent = player.getCardsCount();
  pcCardsCountP.textContent = pcPlayer.getCardsCount();
};

resetBtn.addEventListener('click', function (e) {
  e.preventDefault();
  hideCards();
  playerNameInput.style.display = 'inline';
  playerNameInput.placeholder = 'Player Name';
  startBtn.style.display = 'inline';
  playerName.textContent = '';
  pcName.textContent = '';
  pcCardsCountP.textContent = '';
  playerCardsCountP.textContent = '';
});

function hideCards() {
  playerThreeCardsSide.style.display = 'none';
  pcThreeCardsSide.style.display = 'none';
  playerCardBack.style.display = 'none';
  playerCardFace.style.display = 'none';
  pcCardBack.style.display = 'none';
  pcCardFace.style.display = 'none';
  resetBtn.style.display = 'none';
}
