import { Component, OnInit, OnChanges } from '@angular/core';
import { TicTacToeService } from '../tic-tac-toe.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
mv;
  getMarkFromService;

  get status(){
    return this.service.winner? `Player ${this.service.winner} has won!` : 
    `Player ${this.service.playerTurn}'s turn`;
  }
  constructor(private service: TicTacToeService) {}
 

  ngOnInit() {
    this.getMarkFromService = this.service.cell;
  }
  
  putValue(index) {

      this.service.handleMove(index);
      this.getMarkFromService = this.service.cell;
      this.mv = this.service.moves;
  
  }

  reset(){
    this.service.reset();
    this.mv = this.service.moves;
    this.getMarkFromService = this.service.cell;

  }

  switchMoves(inde){
    this.service.switch(inde);
    this.getMarkFromService = this.service.cell;
    
  }
}
