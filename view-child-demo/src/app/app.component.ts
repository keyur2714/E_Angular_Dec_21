import { Component, ElementRef, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { StringUtilComponent } from './string-util/string-util.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'view-child-demo';

  @ViewChild("msg")
  m1 : ElementRef;

  @ViewChild("title")
  t1 : ElementRef;

  @ViewChild("ss")
  ss : ElementRef;

  @ViewChild("result")
  r : ElementRef;

  @ViewChild(StringUtilComponent)
  stringUtilComponent : StringUtilComponent;


  changeStyle() : void {
    //alert("Hi...!");
    console.log(this.m1);
    //alert(this.m1.nativeElement.innerHTML);
    this.m1.nativeElement.style.color = "green";
    this.m1.nativeElement.style.background = "orange";

    this.t1.nativeElement.innerHTML = "Hi...!";
    this.t1.nativeElement.style.color = "blue";
  }

  action(act : string) : void {
    let value : string = this.ss.nativeElement.value;
    this.stringUtilComponent.str = value;
    if(act === 'u'){
      this.r.nativeElement.innerHTML = "Result Is : "+ this.stringUtilComponent.toUpper();
    }else if(act === 'l'){
      this.r.nativeElement.innerHTML = "Result Is : "+ this.stringUtilComponent.toLower();
    }else if(act === 'r'){
      this.r.nativeElement.innerHTML = "Result Is : "+ this.stringUtilComponent.toReverse();
    }
  }
}
