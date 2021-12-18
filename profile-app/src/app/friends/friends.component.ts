import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styles: [
  ]
})
export class FriendsComponent implements OnInit {

  friendList : string[] = ["Keyur","Denish","Vinit"];

  constructor() { }

  ngOnInit(): void {
    this.friendList.push("Ravi");
    this.friendList.push("Hiren");
  }


}
