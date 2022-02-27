import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../user.model";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Hello...!");
        if(sessionStorage.getItem("user")){
            let user : User = JSON.parse(sessionStorage.getItem("user"));
            let token = user.token;
            if(token){
             req = req.clone({setHeaders : {Authorization : 'Bearer '+token}})
            }
        }        
        return next.handle(req).pipe(map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                console.log("Hi...."+event.status+" "+JSON.stringify(event.body));
                event = event.clone({body: this.modifyBody(event.body)});
            }else if(event instanceof HttpErrorResponse){
                throw "Error";
            }
            return event;
        }));

        
    }

    private modifyBody(body: any) {
        return body;
    }

}