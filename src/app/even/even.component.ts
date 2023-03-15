import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {
  @Input() number: number | any;
  // ref: number | any;

  // onGameStarted(eventData: any){
  //   console.log(eventData.target.innerHTML);
  //   this.ref = eventData.target.innerHTML;
  // }

}
