import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://mycheffy.herokuapp.com/user/"
  private _loginUrl = "https://mycheffy.herokuapp.com/user/login/"
  constructor(private http: HttpClient,
  private _router: Router) { }
  
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/dashboard'])
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
