import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  appUrl : string = 'http://localhost:3000';

  constructor(private httpClient : HttpClient) { }

  listItems() : Observable<Item[]>{    
    const header = new HttpHeaders();
    header.set("Authorization","Bearer 11111")
    .set('content-type', 'application/json');

    const requestOptions = {                                                                                                                                                                                 
      headers: header, 
    };
    
    return this.httpClient.get<Item[]>(this.appUrl+"/items",requestOptions);
  }

  save(item : Item) : Observable<Item>{
    return this.httpClient.post<Item>(this.appUrl+"/items",item);
  }
}
