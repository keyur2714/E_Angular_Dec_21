import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter,map } from 'rxjs/operators';
import { Employee } from './employee.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'observable-demo';
  numberObservable : Observable<number> = interval(1000);
  seqNo : number = 0;
  subscription : Subscription;

  employees : Employee[] = [];

  constructor(private testService ?: TestService) {}

  ngOnInit(): void {
      this.testService.getAllEmployeesCapital().subscribe(
        (data: Employee[])=>{
          this.employees = data;
        },
        (error)=>{
          alert("Something Wrong in Webservice...! "+error);
        }
      )
      this.testService.getAllEmployeeNames().subscribe(
        (data)=>{
          console.log(data);
        }
      )
  }


  start() : void {
    // this.subscription = this.numberObservable.subscribe(
    //   (data : number)=>{
    //     this.seqNo = data;
    //   },
    //   (error)=>{

    //   }
    // )
    this.numberObservable.pipe(
      filter(data=>data%2!==0),
      map(data=>data*data)
    ).subscribe(data=>this.seqNo = data);
      
  
  }

  stop() : void {
    this.subscription.unsubscribe();
  }
}
