import { Component, OnInit } from '@angular/core';
import { AngularQuestion } from '../services/angular.mode';
import { BigDataQuestion } from '../services/bigdata.model';
import { iQuestionService } from '../services/iQuestionService';
import { SpringQuestion } from '../services/spring.model';
import { provideClass } from './provideobj';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers : [
    provideClass
  ]
})
export class ExamComponent implements OnInit {

  question : string = '';

  constructor(private iQuestionService : iQuestionService) { }

  ngOnInit(): void {
    //let iQuestionService : iQuestionService = new AngularQuestion(); //tightly couple code
    this.question = this.iQuestionService.askQuestion();
  }


}
