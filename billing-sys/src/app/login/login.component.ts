import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : []
})
export class LoginComponent implements OnInit {

  userName : string = '';
  passWord : string = '';
  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit(): void {
  }

  login() : void {
    if(this.userName !== '' && this.passWord !== ''){
      this.authService.authenticate(this.userName,this.passWord).subscribe(
        (user)=>{
          if(user === undefined){
            alert("Invalid Username or password.");
          }else{
            sessionStorage.setItem("user",JSON.stringify(user));
            this.router.navigate([this.authService.successUrl]);   
          }
        },
        (error)=>{}
      )
    }
  }

}
