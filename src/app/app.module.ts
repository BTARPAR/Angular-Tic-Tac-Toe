import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import { TicTacToeService } from './tic-tac-toe.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [TicTacToeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
