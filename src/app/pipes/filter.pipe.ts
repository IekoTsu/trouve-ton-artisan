import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(  data : any[], category : string , search : string): any[] {
    let query = search.replace(/\s+/g, '');
    if(!query && !category){
      return data
    } 

    else if (category){
      return data.filter(artisan => artisan.category.toLowerCase().includes(category.toLowerCase()) )
    } 

    else if (query){
      return data.filter(artisan =>{
        let artisanString = artisan.name + artisan.specialty + artisan.location
        return artisanString.toLowerCase().includes(query.toLowerCase())
      } )
    }
    else return []
  }

}
