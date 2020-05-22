import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  private _platesUrl = "https://mycheffy.herokuapp.com/category"
  constructor(private http: HttpClient) { }

  getPlates() {
    return this.http.get<any>(this._platesUrl) 
  }
}
