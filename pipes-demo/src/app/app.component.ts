import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pipes Demo';
  //no : number = 0;
  numberObservable : Observable<number> = interval(1000);

  dateOfBirth : Date = new Date("1886-12-27 02:05");

  salary : number = 11111;
  cur : string = 'GBP';

  per : number = 0.2500000;

  name : string = 'Keyur Thakor';
  name1 : string = 'Denish Patel';

  person = {
    "id":1,
    "name":"Keyur",
    "city":"Pune",
    "salary":12121,
    "accountNo" : "12312311223",
    "mobileNo" : "7387029781"
  };

  ngOnInit(): void {
      // this.numberObservable.subscribe(
      //   (data)=>{
      //     this.no = data;
      //   }
      // )
  }
}
