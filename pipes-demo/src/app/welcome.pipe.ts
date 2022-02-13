import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome',
  pure : false
})
export class WelcomePipe implements PipeTransform {

  constructor(){
    console.log("Welcome Pipe Object Created...!");
  }

  transform(value: string, ...args: unknown[]): unknown {
    let newValue : string = 'Welcome '+value;
    return newValue;
  }

}
