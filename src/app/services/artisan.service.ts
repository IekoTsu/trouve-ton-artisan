import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {

  private dataUrl: string = "assets/db/datas.json"

  constructor(private https: HttpClient) { }
  
  getData(): Observable<any> {
    return this.https.get(this.dataUrl);
  }
}
 