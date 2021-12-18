import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  firstName : string = '';
  lastName : string = '';
  mobileNo : string = '';
  email : string = '';
  age : number = 0;
  dateOfBirth : Date = null;

  personalInfo = {
    "firstName" : "Denish",
    "lastName" : "Patel",
    "mobileNo" : "8600712121",
    "email" : "denishjava27@gmail.com",
    "age" : 36,
    "dateOfBirth" : new Date("1985-05-24")
  };

  constructor() {
    console.log("Personal Info Component Object Created...!");
  }

  ngOnInit(): void {
    console.log("Personal Info Component Initialized...!");
    this.firstName = 'Keyursinh';
    this.lastName = 'Thakor';
    this.mobileNo = '7387029671';
    this.email = 'keyurjava27@gmail.com';
    this.age = 35;
    this.dateOfBirth = new Date("1986-12-27");
  }

}
