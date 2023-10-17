import { Player } from './player.js';

export class Game {
  constructor() {
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

  defineWinnerHand(playerCard, pcCard) {
    let roundCards = [playerCard, pcCard];

    if (playerCard.points >= pcCard.points) {
      this.players[0].addCardsToHand(roundCards);
    } else {
      this.players[1].addCardsToHand(roundCards);
    }
  }

  defineWinner() {}

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
