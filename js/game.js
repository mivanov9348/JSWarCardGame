import { Player } from './player.js';

export class Game {
  constructor() {
    this.roundCards = [];
    this.players = [];
  }

  startGame(player, pc) {
    player.isTurn = true;
    pc.isTurn = false;
    this.players.push(player);
    this.players.push(pc);
  }

  getGame() {
    return this.Game;
  }

  getPlayers() {
    return this.players;
  }

  defineWinnerHand() {
    if (this.roundCards[0].points > this.roundCards[1].points) {
      this.handlePlayerWin(this.roundCards);
    } else if (this.roundCards[1].points > this.roundCards[0].points) {
      this.handlePcWin(this.roundCards);
    } else {
      this.handleDraw();
    }
  }

  handlePlayerWin() {
    this.players[0].addCardsToHand(this.roundCards);
    this.roundCards = [];
  }

  handlePcWin() {
    this.players[1].addCardsToHand(this.roundCards);
    this.roundCards = [];
  }

  handleDraw() {
    console.log('its draw');

    let playerThreeCards = this.players[0].drawThreeCards();
    this.roundCards.push(...playerThreeCards);
    let pcThreeCards = this.players[1].drawThreeCards();
    this.roundCards.push(...pcThreeCards);
    console.log(this.roundCards);

    console.log(playerThreeCards[2]);
    console.log(pcThreeCards[2]);

    if (playerThreeCards[2].points > pcThreeCards[2].points) {
      console.log(`player win ${this.roundCards.length} cards`);

      this.handlePlayerWin();
    } else if (pcThreeCards[2].points > playerThreeCards[2].points) {
      console.log(`pc win ${this.roundCards.length} cards`);

      this.handlePcWin();
    } else {
      this.handleDraw();
    }
  }

  changeTurn() {
    if (this.players[0].isTurn === true) {
      this.players[0].isTurn = false;
      this.players[1].isTurn = true;
    } else {
      this.players[1].isTurn = false;
      this.players[0].isTurn = true;
    }
  }
}
