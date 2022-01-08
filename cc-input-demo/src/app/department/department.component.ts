import { Component, OnInit } from '@angular/core';
import { Department } from './department-model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  
  deptList : Department[] = [];
  headerList : string[] = ["Dept Code","Dept Name"];
  fieldList : string[] = ["code","deptName"];

  constructor() { }

  ngOnInit(): void {
    let dept1 = new Department(1,"IT","Information Technology");
    let dept2 = new Department(2,"HR","Humuan Resource");
    let dept3 = new Department(3,"ADMIN","Administration");
    this.deptList = [dept1,dept2,dept3];
  }

}
