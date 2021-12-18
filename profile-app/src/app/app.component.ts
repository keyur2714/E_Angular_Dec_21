import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-app';
  name : string  = 'Keyursinh Thakor';
  constructor() {
    console.log("App Component Object Created...!");
  }
}
