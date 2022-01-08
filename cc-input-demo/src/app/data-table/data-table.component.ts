import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() title : string = '';
  @Input("header-list") headerList : string[] = [];
  @Input("data-list") dataList : any[] = [];
  @Input("field-list") fieldList : string[] = [];
  @Input("bg-color") bgColor : string = 'info';
  @Input("text-color") textColor : string = 'dark';

  constructor() { }

  ngOnInit(): void {
  }

}
