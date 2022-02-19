import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated : boolean = false;
  successUrl : string = 'home';

  url : string = 'http://localhost:3000';

  constructor(private httpClient : HttpClient) { }

  getAllUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>(this.url+"/users");
  }

  authenticate(username ?: string,password ?: string) : Observable<User>{
    return this.getAllUsers().pipe(
      map(users=>{
        for(let user of users){
          if(user.username === username && user.password === password){
            this.isAuthenticated = true;
            return user;
          }
        }        
      })
    )
  }

}
