import { Location } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit,AfterViewInit{
  
  id : number = -1;

  productForm = this.fb.group({
    id: [null,Validators.required],
    name: [null, Validators.compose([Validators.minLength(3),Validators.required])],
    unitPrice: [null, Validators.required],
    quantity: [null, Validators.required]    
  });
  
  constructor(private fb: FormBuilder,private productService : ProductService,private router : Router,private location : Location,private activatedRoute : ActivatedRoute,
    public dialogRef: MatDialogRef<ProductEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

  ngOnInit(): void {      
      this.activatedRoute.params.subscribe(
        (param)=>{
          this.id = param.id;
        }
      )
      this.id = this.data.id;
      //alert(this.id);
  }

  ngAfterViewInit(): void {
      if(this.id === undefined){
        this.id = -1;
      }
      this.productService.getProductDetailById(this.id).subscribe(
        (data : Product) =>{
          this.productForm.setValue(data);
        }
      )
  }

  onSubmit(): void {
    if(this.productForm.valid){
      console.log(this.productForm.value);
      console.log(this.productForm.controls['id'].value);
      console.log(this.productForm.controls['name'].value);
      console.log(this.productForm.controls['unitPrice'].value);
      console.log(this.productForm.controls['quantity'].value);    
      let product : Product = this.productForm.value;
      if(this.id === -1){
        this.productService.saveProduct(product).subscribe(
          (data : Product)=>{
            alert("Product Created Successfully with Id "+data.id);
            this.router.navigate(['/home/products']);
            this.dialogRef.close(this.id);
          },
          (error)=>{
          }
        )
      }else{
        this.productService.updateProduct(product).subscribe(
          (data : Product)=>{
            alert("Product Update Successfully with Id "+data.id);
            this.router.navigate(['/home/products']);
            this.id = -1;
            this.dialogRef.close(this.id);
          },
          (error)=>{
          }
        )
      }
      
    }
    
  }

  back() : void {
    this.location.back();
  }
}
