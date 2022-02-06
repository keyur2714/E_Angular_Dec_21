import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map }  from 'rxjs/operators';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  
  getAllEmployees() : Observable<Employee[]>{
    let emp1 = new Employee(1,"Keyur","Pune",11111);
    let emp2 = new Employee(2,"denish","Surat",11112);
    let emp3 = new Employee(3,"Vinit","Surat",11113);
    let emp4 = new Employee(4,"Ami","Pune",111114);
    let emp5 = new Employee(5,"Suresh","Bhuj",11115);
    return of([emp1,emp2,emp3,emp4,emp5]);
  }

  getAllEmployeesCapital() : Observable<Employee[]> {
    return this.getAllEmployees().pipe(
      map(empList=>{
        for(let emp of empList){
          emp.name = emp.name.toUpperCase();
          if(emp.name === 'DENISH'){
            throw emp.name;
          }
        }
        return empList
      }),
      catchError(err=> {throw 'error in source. Details: ' + err})
    );
  }

  getAllEmployeeNames() : Observable<string[]>{
    return this.getAllEmployees().pipe(
      map(empList=>{
        let names : string[]= [];
        for(let emp of empList){
          names.push(emp.name);
        }
        return names;
      })
    );
  }

}
