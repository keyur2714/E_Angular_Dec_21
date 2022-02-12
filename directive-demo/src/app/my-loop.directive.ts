import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  constructor(private templateRef : TemplateRef<any>,private viewContainerRef: ViewContainerRef) { 
    console.log("MyLoop Directive Object Created...!");
  }

  @Input() set appMyLoop(cnt : number) {
    //alert(cnt);
    for(let i=1;i<=cnt;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  @Input("appMyLoopTxt") set txt(txt : string) {
    console.log(txt);
  }

  @Input("appMyLoopValue") set val(val : string) {
    console.log(val);
  }
}
