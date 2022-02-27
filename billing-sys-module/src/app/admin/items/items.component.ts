import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemList : Item[] = [];

  constructor(private itemService : ItemService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems() : void {
    this.itemService.listItems().subscribe(
      (data : Item[])=>{
        this.itemList = data;
      },
      (error)=>{

      }
    )
  }

}
