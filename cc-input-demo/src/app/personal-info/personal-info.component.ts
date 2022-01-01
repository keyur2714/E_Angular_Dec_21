import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  @Input("first-name") firstName : string = "Keyur";
  @Input("last-name") lastName : string = "Thakor";
  @Input("date-of-birth") dob : Date = new Date("1986-12-27");
  @Input("mobile-number") mobileNo : string = "7387029671";

  @Input("bg-color") bgColor : string="warning";
  @Input("text-color") textColor : string="dark";

  constructor() { }

  ngOnInit(): void {
  }

}
