import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{

  constructor(private authService : AuthService,private router : Router) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let url = state.url;
    this.authService.successUrl = url;
    if(this.authService.isAuthenticated){      
      return true;
    }else{
      this.router.navigate(['login']);
    }
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let user : User = JSON.parse(sessionStorage.getItem("user")); 
    if(user.role === 'ADMIN'){
      return true;
    }else{
      alert("Sorry you do not have permission to access this module.");
      return false;
    }
  } 
 

  
}
