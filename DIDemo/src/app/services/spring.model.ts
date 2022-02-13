import { iQuestionService } from "./iQuestionService";

export class SpringQuestion extends iQuestionService{
    askQuestion(): string {
        return "What is Spring Framework?";
    }        
}