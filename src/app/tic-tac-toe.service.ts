import { Injectable } from '@angular/core';

@Injectable()
export class TicTacToeService {
  playerTurn = 'X';
  cell = Array(9).fill(null);
  updateCell = Array(9).fill(null);
  winner = null;
  moves = [];
  checkSwitch = false;
  listen;
  constructor() { }

  switch(place) {
    this.checkSwitch = true;
    if (place % 2 == 0) {
      this.playerTurn = "O";
    } else {
      this.playerTurn = "X";
    }
    this.cell = this.moves[place];
  }

  handleMove(position) {

    if (!this.cell[position] && !this.winner) {
      if (this.checkSwitch == true) {

        let j;

        for (let i = 0; i < this.moves.length; i++) {

          if (this.moves[i] == this.cell) {
            j = i;
            break;
          }
        }
        if (j % 2 == 0) {
          this.playerTurn = "O";
        } else {
          this.playerTurn = "X";
        }

        let d = this.moves.slice(0, j + 1);
  
        for (let i = 0; i < this.cell.length; i++) {
          if (this.cell[i] != null) {
            this.updateCell[i] = this.cell[i];
          }
        }
        this.updateCell[position] = this.playerTurn;
        d.push(this.updateCell);
        this.cell = this.updateCell;
        this.moves = d;
        
        this.updateCell = Array(9).fill(null);

        this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X';
        /*  this.checkSwitch = false; */

      } else {
        this.cell[position] = this.playerTurn;
        this.moves.push(this.cell.slice());

        if (this.winnigMove()) {
          this.winner = this.playerTurn;
        } else {
          this.playerTurn = this.playerTurn === 'X' ? 'O' : 'X';
        }
      }
    }

  }

  winnigMove() {
    const conditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colums
      [0, 4, 8], [2, 4, 6]             // diagonal 
    ];
    for (let condition of conditions) {
      if (this.cell[condition[0]]
        && this.cell[condition[0]] === this.cell[condition[1]]
        && this.cell[condition[1]] === this.cell[condition[2]]) {
        return true;
      }
    }
    return false;
  }

  reset() {
    this.cell = Array(9).fill(null);
    this.winner = null;
    this.moves = [];
    this.playerTurn = 'X';
  }
}


