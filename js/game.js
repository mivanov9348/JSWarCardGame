import { Player } from "./player.js";

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

  endGame(winner) {
    alert(`${winner} is winner!`);
  }

  getGame() {
    return this;
  }

  getPlayers() {
    return this.players;
  }

  defineWinner() {
    if (this.players[0].getCardsCount() < 1) {
      this.endGame(this.players[1].name);
    } else if (this.players[1].getCardsCount() < 1) {
      this.endGame(this.players[0].name);
    }
  }

  defineWinnerHand() {
    if (this.roundCards[0].points > this.roundCards[1].points) {
      this.handlePlayerWin(this.roundCards);
      this.defineWinner();
    } else if (this.roundCards[1].points > this.roundCards[0].points) {
      this.handlePcWin(this.roundCards);
      this.defineWinner();
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
    let playerThreeCards = this.players[0].drawThreeCards();
    this.simulateDrawThreeCards(true, playerThreeCards);

    this.roundCards.push(...playerThreeCards);
    let pcThreeCards = this.players[1].drawThreeCards();
    this.simulateDrawThreeCards(false, pcThreeCards);

    this.roundCards.push(...pcThreeCards);

    if (playerThreeCards[2].points > pcThreeCards[2].points) {
      this.handlePlayerWin();
      this.defineWinner();
    } else if (pcThreeCards[2].points > playerThreeCards[2].points) {
      this.handlePcWin();
      this.defineWinner();
    } else {
      this.handleDraw();
    }
  }

  simulateDrawThreeCards(playerTurn, cards) {
    if (playerTurn) {
      const playerThreeCardsSide = document.querySelector(
        ".playerSide-card-stack"
      );
      playerThreeCardsSide.style.display = "inline";

      cards.forEach((card, index) => {
        setTimeout(() => {
          playerThreeCardsSide.children[
            index
          ].src = `/cardsImg/${card.value}_of_${card.suit}.png`;
          if (playerThreeCardsSide.children[2])
            playerThreeCardsSide.children[2].style.border = "3px solid black";
        }, 500 * (index + 5));
      });
    } else {
      const pcThreeCardsSide = document.querySelector(".pcSide-card-stack");
      pcThreeCardsSide.style.display = "inline";

      cards.forEach((card, index) => {
        setTimeout(() => {
          pcThreeCardsSide.children[
            index
          ].src = `/cardsImg/${card.value}_of_${card.suit}.png`;
          if (pcThreeCardsSide.children[2])
            pcThreeCardsSide.children[2].style.border = "3px solid black";
        }, 500 * (index + 10));
      });
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
