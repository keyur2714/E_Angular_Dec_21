import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items-entry',
  templateUrl: './items-entry.component.html',
  styleUrls: ['./items-entry.component.css']
})
export class ItemsEntryComponent implements OnInit {

  itemEntryForm : FormGroup;

  constructor(private fb : FormBuilder,private itemService : ItemService,private router : Router) { }

  ngOnInit(): void {
    this.createItemEntryForm();
  }

  createItemEntryForm() : void {
    this.itemEntryForm = this.fb.group(
      {
        id : [-1,Validators.required],
        itemName : ['',Validators.required],
        itemCode : ['',Validators.required],
        price : [0,Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')])],
        discount : [0,Validators.required]
      }
    )
  }

  save() : void {
    if(this.itemEntryForm.valid){
      let item : Item = this.itemEntryForm.value;
      this.itemService.save(item).subscribe(
        (data:Item)=>{
          alert("Item Created Successfully...!");
          this.router.navigate(['/admin/items']);          
        }
      )
    }
  }

}
