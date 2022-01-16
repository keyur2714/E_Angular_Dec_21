import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-util',
  template: '',
  styles: []
})
export class StringUtilComponent implements OnInit {

  str : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toUpper() : string {
    return this.str.toUpperCase();
  }

  toLower() : string {
    return this.str.toLowerCase();
  }

  // toReverse(str : string) : string {
  //   return str.split("").reverse().join("");
  // }

  toReverse() : string {
    return this.str.split("").reverse().join("");
  }
}
