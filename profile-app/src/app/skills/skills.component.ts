import { Component, OnInit } from '@angular/core';
import { SkillInfo } from './skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillList : SkillInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    let skill1 = new SkillInfo("BigData Technologies",["Hadoop","Hive","Spark","Sqoop","SnowFlake"]);
    let skill2 = new SkillInfo("Java Technologies",["Java","Spring","Hibernate","Spring Boot","Micro Services"]);
    let skill3 = new SkillInfo("Database Technologies",["MySql","Postgres","Sql Server"]);
    let skill4 = new SkillInfo("Operating System",["Windows","Linux","Unix"]);
    let skill5 = new SkillInfo("Tools",["VS Code","Inteli J","Eclipse"]);
    this.skillList = [skill1,skill2,skill3,skill4,skill5];
  }

}
