import { Component, OnInit } from '@angular/core';
import { EducationInfo } from './education.model';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {

  educationList : EducationInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    let education1 = new EducationInfo();
    education1.id = 1;
    education1.education = "S.S.C - 2001";
    education1.boardOrUniversity = "GSEB";
    education1.averagePercentage = 72.14;
    education1.grade = "Dist";

    let education2 = new EducationInfo(2,"H.S.C - 2003","GHSEB",66.50,"First");
    let education3 = new EducationInfo(3,"B.C.A - 2006","V.N.S.G.U",60.85,"First");
    let education4 = new EducationInfo(4,"M.C.A - 2009","S.P",65.00,"First");

    this.educationList.push(education1);
    this.educationList.push(education2);
    this.educationList.push(education3);
    this.educationList.push(education4);

  }

}
