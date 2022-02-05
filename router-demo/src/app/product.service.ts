import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url : string = "http://localhost:3000";

  constructor(private httpClient : HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url+"/products");
  }

  getProductDetailById(id : number) : Observable<Product> {
    return this.httpClient.get<Product>(this.url+'/products/'+id);
  }

  saveProduct(product : Product) : Observable<Product> {
    return this.httpClient.post<Product>(this.url+'/products',product);
  }

  updateProduct(product : Product) : Observable<Product> {
    return this.httpClient.put<Product>(this.url+'/products/'+product.id,product);
  }

  deleteProductById(id : number) : Observable<void> {
    return this.httpClient.delete<void>(this.url+"/products/"+id);
  }
}
