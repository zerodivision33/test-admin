import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  private _driversUrl = "https://mycheffy.herokuapp.com/manage/list/driver"
  private _driverAcceptUrl = "https://mycheffy.herokuapp.com/manage/driver/accept/"
  private _driverRejectUrl = "https://mycheffy.herokuapp.com/manage/driver/reject/"

  
  
  
  constructor(private http: HttpClient) { }

  getDriversList(page: number, pageSize: number) {
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    return this.http.get<any>(`${this._driversUrl}?page=${page}&pageSize=${pageSize}`, {headers:header});
  }

  acceptDriver(id:number){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );

    let url = this._driverAcceptUrl + id
    return this.http.post<any>(url,{},{headers:header});
  }

  rejectDriver(id: number){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    let url = this._driverRejectUrl + id
    return this.http.post<any>(url,{},{headers:header});
  }
}
