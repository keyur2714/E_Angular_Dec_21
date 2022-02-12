import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private templateRef: TemplateRef<any>,private viewContainerRef : ViewContainerRef) {
    console.log("MyIf Directive Object Created...!");
  }

  @Input("appMyIf") set myIf(condition : boolean) {
    //alert(condition);    
    if(condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }
}
