import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  number1 : string = "11";
  number2 : string = "22";
  result ?: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  plus() : void {    
    this.result = parseInt(this.number1) + parseInt(this.number2);
  }


  // plus(n1 ?: string,n2 ?: string) : void {
  //   //alert(parseInt(n1)+parseInt(n2));
  //   this.result = parseInt(n1)+parseInt(n2);
  // }

  minus() : void {    
    this.result = parseInt(this.number1) - parseInt(this.number2);
  }

  // minus(n1 ?: string,n2 ?: string) : void {
  //   //alert(parseInt(n1)-parseInt(n2));
  //   this.result = parseInt(n1)-parseInt(n2);
  // }
  mul() : void {    
    this.result = parseInt(this.number1) * parseInt(this.number2);
  }
  // mul(n1 ?: string,n2 ?: string) : void {
  //   //alert(parseInt(n1)*parseInt(n2));
  //   this.result = parseInt(n1)*parseInt(n2);
  // }

  div() : void {
    //alert(parseInt(n1)/parseInt(n2));
    let num2 = parseInt(this.number2);
    if(num2 === 0){
      this.result = 0;
    }else{
      this.result = parseInt(this.number1) / num2;
    }    
  }

}

//   div(n1 ?: string,n2 ?: string) : void {
//     //alert(parseInt(n1)/parseInt(n2));
//     let num2 = parseInt(n2);
//     if(num2 === 0){
//       this.result = 0;
//     }else{
//       this.result = parseInt(n1)/num2;
//     }    
//   }

// }
