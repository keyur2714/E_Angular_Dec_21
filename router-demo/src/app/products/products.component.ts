import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  dataSource : MatTableDataSource<Product> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Product>;

  displayedColumns = ['id', 'name', 'unitPrice', 'quantity', 'action'];

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() : void {
    this.productService.getAllProducts().subscribe(
      (data : Product[])=>{        
        this.dataSource.data = data; 
      },
      (error)=>{

      }
    )
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id : number) : void {
    let confirmMsg = confirm("Are you sure want to delete product with Id : "+id+" ?");
    if(confirmMsg) {
      this.productService.deleteProductById(id).subscribe(
        ()=>{
          alert("Product Deleted successfully with id : "+id);
          this.getAllProducts();
        }
      )
    }
  }

}
