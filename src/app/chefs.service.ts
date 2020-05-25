import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChefsService {

  private _chefsUrl = "https://mycheffy.herokuapp.com/manage/list/chef"

  constructor(private http: HttpClient) { }

  getChefsList(){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    return this.http.get<any>(this._chefsUrl, {headers:header});
  }
}
