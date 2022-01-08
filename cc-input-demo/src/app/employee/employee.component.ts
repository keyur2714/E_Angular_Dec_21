import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empList : Employee[] = [];
  headerList : string[] = ["Id","Name","Salary","Dept Id"];
  fieldList : string[] = ["id","name","salary","deptId"];

  constructor() { }

  ngOnInit(): void {
    let emp1 = new Employee(11,"Keyur",100000,1);
    let emp2 = new Employee(12,"Denish",110000,2);
    let emp3 = new Employee(13,"Vinit",120000,3);
    this.empList.push(emp1);
    this.empList.push(emp2);
    this.empList.push(emp3);
  }

}
