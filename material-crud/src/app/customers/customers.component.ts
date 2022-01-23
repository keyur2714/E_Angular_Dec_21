import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../customer.service';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, AfterViewInit {
  
  dataSource : MatTableDataSource<Customer> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  

  @Output() getEventData = new EventEmitter<string>();

  customers : Customer[] = [];
  
  @ViewChild(MatTable, {static: false}) table: MatTable<Customer>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'address', 'city' , 'contact' , 'action'];

  constructor(private customerService : CustomerService) {    
  }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(
      (data : Customer[])=>{
        this.dataSource.data = data; 
      },
      (error)=>{
        console.log("Error "+error);
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

  edit(id : number) : void {    
    this.getEventData.emit("edit:"+id);
  }

  delete(id : number) : void {
    let confirmMsg = confirm("Are you sure want to delete Customer with Id : "+id + "?");
    if(confirmMsg){
      this.getEventData.emit("delete:"+id);    
    }    
  }
}
