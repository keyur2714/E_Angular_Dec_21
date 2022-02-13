import { iQuestionService } from "./iQuestionService";

export class BigDataQuestion extends iQuestionService{
    askQuestion(): string {
        return "What is BigData?";
    }    
}