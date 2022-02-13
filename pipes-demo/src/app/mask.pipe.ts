import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {


  constructor(){
    console.log("Mask Pipe Object Created...!");
  }

  transform(value: string, maskingChar : string,nuOfVisibleChar : number): string {
    let newValue = '';
    let totalMaskChar = value.length - nuOfVisibleChar;
    let visibleString = value.substring(totalMaskChar);
    for(let i=1;i<=totalMaskChar;i++){
      newValue = newValue + maskingChar;
    }
    return newValue+visibleString;
  }

}
