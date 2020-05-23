import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginUserData = {}
  constructor(private _auth: AuthService,
  private _router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/dashboard'])
        },
        err => console.log(err)
    )
  }

}
