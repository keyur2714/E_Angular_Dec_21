import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cc-output-demo';

  revMsg1 : string = '';
  revMsg2 : string = '';

  getMsg1(event) : void {
    //alert(event);
    this.revMsg1 = event;
  }
  getMsg2(event) : void {
    //alert(event);
    this.revMsg2 = event;
  }
}
