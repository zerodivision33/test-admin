import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  private _driversUrl = "https://mycheffy.herokuapp.com/manage/list/driver"

  constructor(private http: HttpClient) { }

  getDriversList() {
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    return this.http.get<any>(this._driversUrl, {headers:header});
  }
}
