import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-calc',
  templateUrl: './string-calc.component.html',
  styleUrls: ['./string-calc.component.css']
})
export class StringCalcComponent implements OnInit {

  str : string = '';
  result : string= '';

  constructor() { }

  ngOnInit(): void {
  }

  reverse() : void {
    this.result = this.str.split('').reverse().join('');
  }

  upper() : void {
    this.result = this.str.toUpperCase();
  }

  lower() : void {
    this.result = this.str.toLowerCase();
  }

}
