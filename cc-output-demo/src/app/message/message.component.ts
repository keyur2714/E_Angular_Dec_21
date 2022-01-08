import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input("message") msg : string = 'Hello Radhe Krishna...!';

  @Output("reverse-message") reverseMsgEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    let revMsg = this.msg.split("").reverse().join("");
    this.reverseMsgEvent.emit(revMsg);
  }

}
