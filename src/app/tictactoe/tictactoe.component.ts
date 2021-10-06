import { Component } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent {

  currentPlayer: string = 'O';
  winner: string = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  processPlay(line: number, col: number){

    //Verificar se todas as células estão marcadas e se há um vencedor    
    if(this.board[line][col] == '' && this.winner == ''){
      this.board[line][col] = this.currentPlayer;
     
      //Verificando vencedor
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }

      //Muda o jogador
      if (this.currentPlayer == 'O') {
        this.currentPlayer = 'X';
      }else{
        this.currentPlayer = 'O';
      }
    }
  }


  
  checkWinner(player: string): boolean{
    
    //Verificar Linha
    for(let i = 0; i < this.board.length; i++){
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true;
      }
    }

    //Verificando Coluna
    for(let i = 0; i < this.board.length; i++){
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true;
      }
    }

    //Verificando Diagonais
    if(this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player){
      return true;
    }
    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
      return true;
    }
    return false;
  }


  reset(){
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }

}
