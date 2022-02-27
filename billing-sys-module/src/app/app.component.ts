import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billing-sys';
  isLoggedIn : boolean = false;
  constructor(private authService : AuthService){}

  checkIsLoggedIn() : void {    
    this.isLoggedIn =  this.authService.isAuthenticated;
  }
}
