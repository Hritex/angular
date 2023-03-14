import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Output() gameStarted = new EventEmitter<{count: number}>();

  cnt = 0;
  count: number | any;

  startGame() {
    this.cnt = this.cnt + 1;
    // console.log('Count is ' + this.cnt);
  }

  setIntervl() {
    setInterval(() => this.startGame(), 1000);
    this.gameStarted.emit({
      count: this.cnt
    });
  }



}
