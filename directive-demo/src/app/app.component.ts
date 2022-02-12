import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomStypeDirective } from './custom-stype.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'directive-demo';

  condition : boolean = true;
  msg : string = '';

  loopCounter : number = 20;
  
  ngOnInit(): void {
      let today : Date = new Date();
      if(today.getHours() >= 12){        
        this.msg = 'Hello Good Afternoon...!';
      }else{        
        this.msg = 'Hello Good Morning...!';
      }
  }
 
}
