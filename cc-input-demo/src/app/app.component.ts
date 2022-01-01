import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cc-input-demo';

  message : string = "Welcome to Angular World...!";

  messageList : string[] = [
    "Hi...!",
    "Good Morning...!",
    "Good Afternoon...!",
    "Good Evening...!",
    "Good Night"
  ];

  friend = {
    "firstName" : "Vinit",
    "lastName" : "Shah",
    "dateOfBirth" : "1985-08-23",
    "mobileNo" : "9879534778"
  };
}
