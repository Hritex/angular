import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval: any;
  lastNumber = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }

  onPauseGame() {
    if (this.interval)
    {
      clearInterval(this.interval);
    }
  }

  // @Output() gameStarted = new EventEmitter<{count: number}>();

  // cnt = 0;
  // count: number | any;

  // startGame() {
  //   this.cnt = this.cnt + 1;
  //   // console.log('Count is ' + this.cnt);
  // }

  // setIntervl(): any{
  //   setInterval(() => this.startGame(), 1000);
  //   this.gameStarted.emit({
  //     count: this.cnt
  //   });
  // }

  // stopIntervl(){
  //   clearInterval(this.setIntervl());
  // }



}
