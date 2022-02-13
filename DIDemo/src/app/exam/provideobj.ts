import { AngularQuestion } from "../services/angular.mode";
import { BigDataQuestion } from "../services/bigdata.model";
import { iQuestionService } from "../services/iQuestionService";
import { SpringQuestion } from "../services/spring.model";

export const provideClass = {provide : iQuestionService , useClass : AngularQuestion};