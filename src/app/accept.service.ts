import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcceptService {

  private _driverAcceptUrl = "https://mycheffy.herokuapp.com/manage/driver/accept/2"

  constructor(private http: HttpClient) { }

  acceptDriver(){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );

    let url = this._driverAcceptUrl
    return this.http.post<any>(url,{},{headers:header});
  }
}
