import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from '../products/product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Product = new Product();
  id : number = -1;
  constructor(private productService : ProductService,private activatedRoute : ActivatedRoute,private location : Location) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.productService.getProductDetailById(this.id).subscribe(
      (data : Product) => {
        this.product = data;
      },
      (error)=>{}      
    )
  }

  back() : void {
    this.location.back();
  }

}
