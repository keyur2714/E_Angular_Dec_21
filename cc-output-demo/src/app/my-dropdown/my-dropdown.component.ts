import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lookup } from '../registration/lookup.model';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input() name : string = '';
  @Input() label : string = '';
  @Input("selected-item") selectedItem : Lookup;
  @Input("data-list") dataList : Lookup[] = [];

  @Output("get-selected-item") getSelectedItem = new EventEmitter<Lookup>();

  constructor() { }

  ngOnInit(): void {
  }

  returnSelectedItem() : void{
    this.getSelectedItem.emit(this.selectedItem);
  }

}
