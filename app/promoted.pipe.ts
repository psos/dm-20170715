import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './app.component';

@Pipe({
  name: 'promoted'
})
export class PromotedPipe implements PipeTransform {

  transform(value, args): Product[] {
    if(args === 1)
      return value.filter((val) => val.promoted);
    else
      return value.filter((val) => !val.promoted);    
  }

}
