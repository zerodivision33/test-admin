import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUserDetails() {
    // cost token = localStorage
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    return this.http.get("https://mycheffy.herokuapp.com/user/", { headers: header });
  }
}
