import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagedocsService {
  private _userDocsUrl = "https://mycheffy.herokuapp.com/manage/list-docs"
  constructor(private http: HttpClient) { }

  getUserDocs() {
    let header = new HttpHeaders().set(
      "x-access-token",
      localStorage.getItem("token")
    );
    return this.http.get(this._userDocsUrl, { headers: header });
  }
}
