import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
  @Input() number: number | any;

  // ref: number | any;

  // onGameStarted(eventData: any){
  //   console.log(eventData.target.innerHTML);
  //   this.ref = eventData.target.innerHTML;
  // }

}
