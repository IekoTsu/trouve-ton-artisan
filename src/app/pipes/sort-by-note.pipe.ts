import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByNote',
  standalone: true
})
export class SortByNotePipe implements PipeTransform {

  transform(artisan: any[], order : number): any[] {
    return artisan.sort((a:any , b:any)=> {
      if ( Number(a.note) < Number(b.note) ) { return 1*order}
      else if ( Number(a.note) > Number(b.note) ) { return -1*order }
      else { return 0}
    })
  }

}
