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

  saveCustomer(customer : Customer) : Observable<Customer> {
    return this.httpClient.post<Customer>(this.url+"/customers",customer);
  }

  getCustomerById(id : number) : Observable<Customer>  {
    return this.httpClient.get<Customer>(this.url+'/customers/'+id);
  }

  updateCustomer(customer : Customer,id : number) : Observable<Customer> {
    return this.httpClient.put<Customer>(this.url+"/customers/"+id,customer);
  }

  deleteCustomerById(id : number) : Observable<void> {
    return this.httpClient.delete<void>(this.url+"/customers/"+id);
  }
}
