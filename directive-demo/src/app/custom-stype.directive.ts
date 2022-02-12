import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStype]'
})
export class CustomStypeDirective implements AfterViewInit {

  @Input() color : string = 'black';
  @Input("background-color") backgroundColor : string = 'yellow';
  @Input() fontSize : string = '20px';

  constructor(private elementRef : ElementRef) { 
    console.log("CustomStyle Directive Object Created...!");
  }

  ngAfterViewInit(): void {
      console.log(this.elementRef);
      //alert(this.color);
      this.elementRef.nativeElement.style.color = this.color;
      this.elementRef.nativeElement.style.background = this.backgroundColor;
      this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }

  @HostListener('input') onInput() {
    console.log("input event triggered..."+this.elementRef.nativeElement.value);    
    this.elementRef.nativeElement.style.color = this.color;
  }

  @HostListener('click') onClick() {
    console.log("Click event triggered..."+this.elementRef.nativeElement.value);    
    this.elementRef.nativeElement.style.backgroundColor = this.backgroundColor;
  }


}
