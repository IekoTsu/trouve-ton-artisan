import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarRateService {

  constructor() { }

  getRateStars( artisan : any = {}, rate : any = [] ){
    let note = Number(artisan.note)
    let fullStar = "fa-solid fa-star"
    let halfStar = "fa-regular fa-star-half-stroke"
    let emptyStar = "fa-regular fa-star" 


    if ( 5-note === 0 ){
      for ( let i = 0; i < 5; i++){
        rate.push(fullStar)
      }
    }

    else if ( 5-note < 1 ){ 
      for (let i = 0; i < 4; i++){
        rate.push(fullStar)
      }
      rate.push(halfStar)
     }

    else{
      for (let i = 0; i < Math.trunc(note); i++){
        rate.push(fullStar)
      }
      
      if (Math.trunc(note) != note){
        rate.push(halfStar)
      }

      for ( let i = 0; i < Math.trunc(5-note); i++){

        rate.push(emptyStar)
      }
    }
    return rate
  }
}

