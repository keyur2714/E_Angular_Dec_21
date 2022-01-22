import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customers/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url : string = 'http://localhost:3000'

  constructor(private httpClient : HttpClient) { }

  getAllCustomers() : Observable<Customer[]>  {
    return this.httpClient.get<Customer[]>(this.url+'/customers');
  }
}
