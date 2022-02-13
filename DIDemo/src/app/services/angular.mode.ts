import { iQuestionService } from "./iQuestionService";

export class AngularQuestion extends iQuestionService {
    askQuestion(): string {
        return "What is Angular?";
    }
    
}