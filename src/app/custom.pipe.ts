import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any){
    // if (value == 1){
    //   return "one"
    // }
    // return value


    // switch (value) {
    //     case 0:
    //         value = "zero";
    //         break;
    //     case 1:
    //         value = "one";
    //         break;
    //     case 2:
    //         value = "two";
    //         break;
    //     case 3:
    //         value = "three";
    //         break;
    //     case 4:
    //         value = "four";
    //         break;
    //     case 5:
    //         value = "five";
    //         break;
    //     case 6:
    //         value = "six"
    //         break;
    //     case 7:
    //         value = "seven"
    //         break;
    //     case 8:
    //           value = "eight"
    //         break;
    //     case 9:
    //       value = "nine"
    //         break;
    //     case 10:
    //       value = "ten"
    //         break;        
    // }
    // return value

    const values : {[key: string]: any} ={
      0: 'zero',
      1: 'one', 
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
    }
    return values[value] ?? "value not found"
  }

}
