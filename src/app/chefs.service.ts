import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChefsService {

  private _chefsUrl = "https://mycheffy.herokuapp.com/manage/list/chef"
  private _chefsAcceptUrl = "https://mycheffy.herokuapp.com/manage/chef/accept/"
  private _chefsRejectUrl = "https://mycheffy.herokuapp.com/manage/chef/reject/"

  constructor(private http: HttpClient) { }

  getChefsList(page: number, pageSize: number){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    return this.http.get<any>(`${this._chefsUrl}?page=${page}&pageSize=${pageSize}`, {headers:header});
  }

  acceptChef(id: number){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    let url = this._chefsAcceptUrl + id
    return this.http.post<any>(url,{},{headers:header});
  }

  rejectChef(id: number){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    let url = this._chefsRejectUrl + id
    return this.http.post<any>(url,{},{headers:header});
  }
}
