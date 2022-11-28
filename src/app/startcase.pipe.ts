import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startcase'
})
export class StartcasePipe implements PipeTransform {

  transform(text: string): any {
      if(!text){
        return null;
      }
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      
  }

}
