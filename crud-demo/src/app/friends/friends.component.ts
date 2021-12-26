import { Component, OnInit } from '@angular/core';
import { Friend } from './friend.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendList : Friend[] = [];

  newFriend : Friend = new Friend();

  updateIdx : number = -1;

  constructor() { }

  ngOnInit(): void {
    let friend1 = new Friend(11,"Keyur","7387029671",new Date("1986-12-27"));
    let friend2 = new Friend(12,"Denish","7387029123",new Date("1985-05-24"));
    let friend3 = new Friend(13,"Vinit","9879534778",new Date("1985-08-23"));
    this.friendList.push(friend1);
    this.friendList.push(friend2);
    this.friendList.push(friend3);
  }

  save() : void {
    //console.log(this.newFriend);
    this.friendList.push(this.newFriend);
  }

  update() : void {    
    this.friendList[this.updateIdx] = this.newFriend;
    this.updateIdx = -1;
    alert("Friend Updated Successfully.");
  }

  clear() : void {
    this.newFriend = new Friend();
    this.updateIdx = -1;
  }

  edit(idx : number) : void {
    let tempFriend = new Friend();
    tempFriend.id = this.friendList[idx].id;
    tempFriend.name = this.friendList[idx].name;
    tempFriend.mobileNo = this.friendList[idx].mobileNo;
    tempFriend.dateOfBirth = this.friendList[idx].dateOfBirth;
    this.newFriend = tempFriend;
    this.updateIdx = idx;
  }

  delete(idx : number) : void {
    let confirmMsg = confirm("Are you sure want to detete friend "+this.friendList[idx].name + "?");
    //alert(confirmMsg);
    if(confirmMsg) {
      this.friendList.splice(idx,1);
    }
  }
}
