import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _usersUrl = "https://mycheffy.herokuapp.com/manage/list/user"

  constructor(private http: HttpClient) { }

  getUsersList(){
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    return this.http.get<any>(this._usersUrl, {headers:header});
  }
}
