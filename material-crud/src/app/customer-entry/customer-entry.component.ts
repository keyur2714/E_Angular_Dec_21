import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Contact } from '../customers/contact.model';
import { Customer } from '../customers/customer.model';
import { CustomersComponent } from '../customers/customers.component';

@Component({
  selector: 'app-customer-entry',
  templateUrl: './customer-entry.component.html',
  styleUrls: ['./customer-entry.component.css']
})
export class CustomerEntryComponent implements OnInit {

  customer : Customer = new Customer();

  email : string = '';
  mobileNo : string = '';

  @ViewChild(CustomersComponent)
  customersComponent : CustomersComponent;

  editId : number = -1;
  deleteId : number = -1;


  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
  }

  save(ngForm : NgForm) : void {
    console.log(ngForm.value);
    if(ngForm.valid) {
      let contact = new Contact();
      contact.email = this.email;
      contact.mobileNo = this.mobileNo;
      this.customer.contact = [];
      this.customer.contact.push(contact);
      console.log(this.customer);
      this.customerService.saveCustomer(this.customer).subscribe(
        (data)=>{
          alert("Customer Saved Successfully...!");
          this.customersComponent.ngOnInit();          
        },
        (error)=>{

        }
      )
    }
  }

  update(ngForm : NgForm) : void {
    console.log(ngForm.value);
    if(ngForm.valid) {
      let contact = new Contact();
      contact.email = this.email;
      contact.mobileNo = this.mobileNo;
      this.customer.contact = [];
      this.customer.contact.push(contact);
      console.log(this.customer);
      this.customerService.updateCustomer(this.customer,this.customer.id).subscribe(
        (data)=>{
          alert("Customer Updated Successfully...!");
          this.customersComponent.ngOnInit();
          this.editId = -1;
          this.customer = new Customer();
          this.email = '';
          this.mobileNo = '';
        },
        (error)=>{

        }
      )
    }
  }
  
  getData(data) : void {
    let action = data.split(":")[0];
    
    if(action === "edit") {
      this.editId = data.split(":")[1]; 
      this.customerService.getCustomerById(this.editId).subscribe(
        (data : Customer) => {
          this.customer = data;
          this.email = data.contact[0].email;
          this.mobileNo = data.contact[0].mobileNo;
        }
      )      
    }else if(action == "delete") {
        this.deleteId = data.split(":")[1];         
        this.customerService.deleteCustomerById(this.deleteId).subscribe(
          ()=>{
            alert("Customer Deleted Successfully with Id : "+this.deleteId);
            this.customersComponent.ngOnInit();
            this.deleteId = -1;
          }
        )         
    }
  }
}
